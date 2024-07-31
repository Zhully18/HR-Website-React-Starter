import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="footer_content">
                <h2>SeamFull HR</h2>
                <p>We ared dedicated to providing the best human resource  <br />
                that will foster the frowth of your company</p>
            </div>
            <div className="footer_info">
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Services</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className="footer_support">
                <ul>
                    <li>FAQ's</li>
                    <li>Privacy policy</li>
                    <li>Advertise</li>
                    <li>Term of use</li>
                </ul>
            </div>
            <div className="footer_socials">
                <FaFacebook  className='social_icon'/>
                <BsTwitterX  className='social_icon'/>
                <BsLinkedin  className='social_icon'/>
                <BsInstagram className='social_icon' />
            </div>
        </div>
        <div className="copy">
            <hr />
            <p className="copyright">Copyright © 2010-2024. SeamFull HR. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer