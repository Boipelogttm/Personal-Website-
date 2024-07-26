import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'


const AboutContent = () => {
  return (
    <div className='about'> 
        <div className='left'>
            <h1>About Me</h1>
            <p>Highly creative and disciplined web developer with strong problem-solving and communication skills. Proficient in modern web technologies including C#, HTML, JavaScript, CSS, React.js, and Node.js. Seeking to leverage my skills and experience in a challenging development role.</p>
            <Link to ="/contact"><button className="btn">
              Contact 
              </button> </Link>
        </div>
    </div>

    
  )
};


export default AboutContent;