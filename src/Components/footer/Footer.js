import "./Footer.css"
import { FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                 <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/> 
                    063 836 4061</h4>
                </div>
                <div className="email">
                <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/> 
                bmboipelomaimane@icloud.com</h4>
                </div>
             <div className="right">
                
                <p>This portfolio template was made by Fehimul kabir
                    CEO and founder of Tech2etc. My socials are down below</p>
                <div className="social">
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>  
                </div>
           
            </div>    
            </div>
        </div>
    </div>
  )
}

export default Footer