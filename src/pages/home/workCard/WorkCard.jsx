import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoadImage/Img'

import './style.scss'

const WorkCard = ({ img, index, text }) => {
  const { mobile } = useSelector((state) => state.mobile)
  const [mobileView, setMobileView] = useState(null)

  useEffect(() => {
    setMobileView(mobile)
  }, [mobile])

  return (
    <div className='workCard'>
      <ContentWrapper>
        <div className="info">
          { mobileView !== null && mobileView ? (
            <div className="img-text-container">
              <div style={{ marginRight: '10px' }} className="info-text">
                    <h1>{ text.title }</h1>
                    <p>{ text.p }</p>
                  </div>
                  <Img src={img} />
            </div>
          ) : (
            <div className="img-text-container">
              { index % 2 === 0 ? (
                <>
                  <Img src={img} />
                  <div style={{ marginLeft: '10px' }} className="info-text">
                    <h1>{ text.title }</h1>
                    <p>{ text.p }</p>
                  </div>
                </>
              ): (
                <>
                  <div style={{ marginRight: '10px' }} className="info-text">
                    <h1>{ text.title }</h1>
                    <p>{ text.p }</p>
                  </div>
                  <Img src={img} />
                </>
              ) }
            </div>
          ) }
        </div>
            {/* { index % 2 === 0 ? (
              <div className='img-text-container'>
                <Img src={img} />
                <div style={{ marginLeft: '10px' }} className="info-text">
                  <h1>{ text.title }</h1>
                  <p>{ text.p }</p>
                </div>
              </div>
            ) : (
              <div className='img-text-container'>
                <div style={{ marginRight: '10px' }} className="info-text">
                  <h1>{ text.title }</h1>
                  <p>{ text.p }</p>
                </div>
                <Img src={img} />
              </div>
            ) } */}
      </ContentWrapper>
    </div>
  )
}

export default WorkCard