import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

import './style.scss'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

const Specialties = () => {
  return (
    <div id='specialties' className='specialties'>
      <ContentWrapper>
        <span className="specialties-title">What do we specialize in?</span>
        <div className="specialties-container">
          <div className="specialty">
            <AiOutlineStar className='specialty-icon' />
            <p>Curbs</p>
          </div>
          <div className="specialty">
            <AiOutlineStar className='specialty-icon' />
            <p>Driveways</p>
          </div>
          <div className="specialty">
            <AiOutlineStar className='specialty-icon' />
            <p>Broom Finish</p>
          </div>
          <div className="specialty">
            <AiOutlineStar className='specialty-icon' />
            <p>Smood Finish</p>
          </div>
          <div className="specialty">
            <AiOutlineStar className='specialty-icon' />
            <p>Exposed Finish</p>
          </div>
          <div className="specialty">
            <AiOutlineStar className='specialty-icon' />
            <p>Stamp Finish</p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Specialties