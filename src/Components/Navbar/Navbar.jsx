import React, { useState } from 'react'
import './Navbar.css'
import { TiTimes } from 'react-icons/ti'
import { BiMenu } from 'react-icons/bi'

const Navbar = () => {
    //i just created a state variable Mobile and a setter function setMobile and intitialize it with false
    const [Mobile, setMobile] = useState(false)

  return (
    <div>
        <div className="navbar">
            <div className="nav-logo">
                <h2>SeamFull HR</h2>
            </div>
            <div className={Mobile ? "nav-links" : "links"} onClick={() => setMobile(false)}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div className="btn">
                <a href="#"> <button>Contact Us</button></a>
            </div>
            <button className="toggle" onClick={()=> setMobile(!Mobile)}>
                {Mobile ? <TiTimes className='close_icon'/> : <BiMenu className='open_icon'/>}
            </button>
        </div>
    </div>
  )
}

export default Navbar