import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import logos from '../../../utils/logos'

import Img from '../../../components/lazyLoadImage/Img'

import './style.scss'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

const Banner = () => {
  const { img } = useSelector((state) => state.image)
  const [background, setBackground] = useState(null)

  useEffect(() => {
    setBackground(logos[img])
  }, [img]);

  return (
    <div className='banner'>
      { background && (
          <div className="backdrop-img">
            <Img src={background} alt="" />
          </div>
        ) 
      }

      <ContentWrapper>
        <div className="wrapper">
          <div className="bannerContent">
            <span className="title">Del Valle Construction LLC</span>
            <span className="subTitle">Building Dreams, Brick by Brick!</span>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Banner