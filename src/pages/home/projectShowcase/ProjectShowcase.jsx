import React from 'react'
import { Carousel } from 'react-bootstrap'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import './style.scss'


const ProjectShowcase = ({ logos }) => {
  
  return (
    <div id="showcase">
      <Carousel 
        interval={3000}
        prevIcon={<IoIosArrowBack className='showcase-ap' />}
        nextIcon={<IoIosArrowForward className='showcase-an' />}
      >
        {logos.map((logo, index) => (
          <Carousel.Item key={index}>
          <img
            className="d-block w-100 showcases"
            src={logo}
            alt={`Imagen ${index + 1}`}
          />
          <Carousel.Caption>
            <h3 className='carousel-caption'>PROJECT SHOWCASE</h3>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default ProjectShowcase