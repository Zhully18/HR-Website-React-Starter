import React from 'react'
import hero from '../../assets/hero.jpg'
import './Hero.css'
import { GiBeveledStar, GiFallingStar } from "react-icons/gi";


const Hero = () => {
  return (
    <div>
        <div className="hero">
            <h1 className="hero_header">Empower Your Workforce, <span> Transforming <br />Your Business</span></h1>
            <p>Comprehensive Human Resource Solutions to Elevate Your Organization <br />
            through innovative human resource solutions.</p>
            <div className="hero_btn">
                <button className="cta-btn">Get Started</button>
            </div>
            <div className="icons">
                <GiBeveledStar className='two'/>
                <GiFallingStar className='three'/>
            </div>
            <img src={hero} alt="" className='hero_img'/>
        </div>
    </div>
  )
}

export default Hero