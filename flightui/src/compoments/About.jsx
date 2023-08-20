import React from 'react'
import './AboutStyles.css'
import Footer from './Footer'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    
      <div className='about-section' id="about-id">
        <h1 className='about-heading'>About us</h1>
       <div className="flex-about">
       <div className='about-left-section'>
          <p>A Flight API based web application for fetching real time flight information.In this website user have to sign up along with the the country name user intrested to visit. This app will send information of flights to the user via email. User will receive email at 08:01pm every day.</p>
        </div>
       </div>

    <div style={{width:'100vw',textAlign:'center',marginBottom:'2rem'}}>
    <Link to="/"><Button variant="outline-primary">Home</Button></Link>
    </div>

      </div>
    <Footer/>
    </>
  )
}

export default About
