import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import Button from 'react-bootstrap/Button';
import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1 style={{ fontWeight: "900" }}>Sky Travel.</h1>
                <p style={{ fontWeight: "500" }}>To most people sky is the limit to those who love aviation, sky is home</p>
                <div>
                    <Link to='/signup'  >  <Button variant="outline-primary" size="lg">
                        Sign up
                    </Button></Link>
                    <Link to='/update'><Button variant="outline-info" size="lg">
                        Update
                    </Button></Link>

                    <Link to='/delete'><Button variant="outline-info" size="lg">
                        Delete
                    </Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Video
