import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyles.css'


const NavbarSec = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <Link to='/' style={{ textDecoration: 'none', color: 'white', fontFamily: "Outlit", fontWeight: "600" }} className="hover"><h1>TrAVeL.com</h1></Link>
            <ul className='nav-menu'>
                <li>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                </li>
                <li >
                    <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>About</Link>
                </li>


            </ul>

        </div>

    )
}

export default NavbarSec