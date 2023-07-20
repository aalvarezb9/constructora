import React from "react";
import {
    FaLinkedin
} from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import { BiSolidPhoneCall } from "react-icons/bi";
import { ImLocation } from "react-icons/im"

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import scrollToTop from "../../utils/scrollToTop";

const Footer = () => {

  const handleMapSearch = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('4516 Seagrave Ave. N. Chesterfield VA 23234')}`, '_blank')
  }

  const sendEmail = () => {
    window.location.href = 'mailto:constructionllcdelvalle@gmail.com'
  }

    return (
      <footer id="footer" className="footer">
        <ContentWrapper>
          <ul className="menuItems">
            <li onClick={scrollToTop} className="menuItem">
              {`\u00A9 ${(new Date()).getFullYear()} Del Valle Construction LLC`}
            </li>
          </ul>
          <div className="infoText">
            Building dreams from the ground up. With a commitment to excellence and innovation, we construct spaces that inspire and endure. Our team of skilled professionals crafts every project with precision and passion, delivering quality results on time. Trust us to build your vision into reality, creating foundations that stand the test of time.
          </div>
          <div className="infoText">
            <div className="call-text">
              <BiSolidPhoneCall className="icon" />
              <p>
                <a href="tel:+18048735658">ENGLISH: 804-873-5658</a> | <a href="tel:+18045392258">SPANISH: 804-539-2258</a>
              </p>
            </div>
          </div>
          <div className="infoText">
            <div className="location-text">
              <ImLocation className='icon' />
              <p onClick={handleMapSearch}>
                4516 Seagrave Ave. N. Chesterfield VA 23234
              </p>
            </div>
          </div>
          <div className="socialIcons">
            <span className="icon">
              <MdEmail
                onClick={sendEmail}
              />
            </span>
            <span className="icon">
              <FaLinkedin 
                onClick={() => window.open('https://www.linkedin.com/in/del-valle-construction-llc-a726a3284/', '_blank')} 
              />
            </span>
          </div>
        </ContentWrapper>
      </footer>
    )
}

export default Footer