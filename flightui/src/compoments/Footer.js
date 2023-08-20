import React from 'react'
import './FooterStyles.css'
// import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

import facebook from '../Images/Logos/facebook2x.png'
import google from '../Images/Logos/googleplus2x.png'
import twitter from '../Images/Logos/twitter2x.png'
import instagram from '../Images/Logos/instagram2x.png'

const Footer = () => {
  return (
    <>
      <div className="outer-footer-section">
        <div className="foot-section">
          <div className="left-part">
            <h3>Created By</h3>
            <p>Devang Sati</p>
          </div>
          <div className="right-part">
            <h3>Contact Us</h3>

            <address>Ashley Hall Uttarakhand</address>
            <p>111-888-999</p>
            <div className="logos">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={google} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
