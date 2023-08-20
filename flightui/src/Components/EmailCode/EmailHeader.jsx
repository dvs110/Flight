import React from 'react'
import logo from '../../Images/Logos/aeroLogo.png'
import aero from '../../Images/Logos/hero_Image.png'
import './EmailHeader.css'
export const EmailHeader = () => {
  return (
   <>
   <div className="outer-div">
   <div className="head-section">
    <div className="logo">
        <img src={logo} alt="logo"  />
    </div>
    <div className="info">
        <p>Ashish Khati</p>
        <p>8273119552</p>
        <p>khatiashish2442@gmail.com</p>
    </div>
   </div>
   <div className="main-img">
    <img src={aero} alt="" />
   </div>
   </div>
  
   </>
  )
}

