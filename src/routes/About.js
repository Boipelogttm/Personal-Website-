import React from 'react'
import Navbar from "../Components/nav/Navbar";
import Footer from "../Components/footer/Footer";
import Heroimg2 from '../Components/hero/Heroimg2';
import AboutContent from '../Components/about/AboutContent';


const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="Something you should know about me"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About