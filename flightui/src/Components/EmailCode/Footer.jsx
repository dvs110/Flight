import React from 'react'
import './Footer.css'
import google from '../../Images/Logos/googleplus2x.png'
import twitter from '../../Images/Logos/twitter2x.png'
import instagram from '../../Images/Logos/instagram2x.png'
import facebook from '../../Images/Logos/facebook2x.png'
 const Footer = () => {
  return (
  <>
  <div className="outer-footer-section">
    <div className="foot-section">
       <div className="left-part">
        <h3>Info</h3>
        <p>Stay up-to-date with current activities and future events by following us on your favorite social media channels.</p>
       </div>
       <div className="right-part">
        <h3>Contact Us</h3>
       
        <address>14-bigha Dhalwala Rishikesh near roadways bus stand Uttarakhand</address>
        <p>8273119552</p>
       </div>
    </div>
  </div>
  </>
  )
}

export default Footer;