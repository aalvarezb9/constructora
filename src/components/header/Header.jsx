import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GiMineTruck } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'
import { SlMenu } from 'react-icons/sl'

import ContentWrapper from '../contentWrapper/ContentWrapper'

import './style.scss'

import scrollToTop from '../../utils/scrollToTop'
import { getMobile } from '../../store/mobileSlice'

const Header = () => {
  const [show, setShow] = useState('top')
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const location = useLocation()
  const dispatch = useDispatch();

  useEffect(() => {
    windowWidth > 768 ? dispatch(getMobile(false)) : dispatch(getMobile(true))
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      windowWidth > 768 ? dispatch(getMobile(false)) : dispatch(getMobile(true))
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow('hide')
      } else {
        setShow('show')
      }
    } else {
      setShow('top')
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  const openMobileMenu = () => {
    setMobileMenu(true)
  }

  const handleScrollToDiv = (id) => {
    setMobileMenu(false)
    const div = document.getElementById(id)
    div.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header ${mobileMenu ? 'mobileView': ''} ${show}`}>
      <ContentWrapper>
        <div onClick={scrollToTop} className="logo">
          <GiMineTruck className='truckLogo' />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => handleScrollToDiv('workCardsRef')}>What we do</li>
          <li className="menuItem"  onClick={() => handleScrollToDiv('specialties')}>Our specialties</li>
          <li className="menuItem"  onClick={() => handleScrollToDiv('showcase')}>Project Showcase</li>
          <li className="menuItem" onClick={() => handleScrollToDiv('footer')}>Contact</li>
          <li className="menuItem"></li>
        </ul>
        <div className="mobileMenuItems">
          { mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} /> }
        </div>
      </ContentWrapper>
    </header>
  )
}

export default Header