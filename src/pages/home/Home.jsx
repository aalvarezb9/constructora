import React from 'react'
import { useSelector } from 'react-redux'

import './style.scss'

import Banner from './banner/Banner'
import WorkCard from './workCard/WorkCard'
import ProjectShowcase from './projectShowcase/ProjectShowcase'

import logos from '../../utils/logos'
import Specialties from './specialties/Specialties'

const texts = [
  {
    title: 'We Bring Your Vision to Life',
    p: `Our team of experienced professionals specializes in delivering high-quality construction services on time and within budget. Whether you're a homeowner, business owner, or property developer, we handle every aspect of the construction process to ensure customer satisfaction. From new builds to renovations, trust us to bring your vision to life with precision and expertise.`
  },
  {
    title: 'We Build Dreams, One Project at a Time',
    p: `Welcome to our construction company, where we specialize in residential and commercial projects. With our team of experienced professionals, we are dedicated to delivering high-quality construction services that exceed your expectations. Whether you're a homeowner, business owner, or property developer, we understand the importance of your project and are committed to completing it on time and within budget. From new builds to renovations, we handle every aspect of the construction process with precision and attention to detail. Trust us to turn your vision into reality and ensure customer satisfaction every step of the way. Contact us today to get started on your dream project.`
  },
  {
    title: 'Building Your Vision, Building Your Future',
    p: `Our construction company specializes in turning your dreams into reality. With our team of experienced professionals, we provide reliable and skilled construction services for homeowners, business owners, and property developers. From new builds to renovations, we handle every aspect of the construction process to ensure high-quality results that meet your needs and exceed your expectations. Trust us to bring your vision to life and build a better future for you.`
  },
]

const Home = () => {
  const { img } = useSelector((state) => state.image)
  const itemToRemove = logos[img]

  return (
    <div className='homePage'>
      <Banner />
      { logos.filter((logo) => logo !== itemToRemove).sort((a, b) => b - a).map((logo, index) => {
        if (index < 3) {
          return (
            <div id='workCardsRef' key={index}>
              <WorkCard key={index} img={logo} index={index} text={texts[index]} />
            </div>
          )
        }
      }) }
      <Specialties />
      <ProjectShowcase logos={logos} />
    </div>
  )
}

export default Home