import React from 'react'
import Navbar from "../Components/nav/Navbar";
import Footer from "../Components/footer/Footer";
import Heroimg2 from '../Components/hero/Heroimg2';
import WorkData from "../Components/work/WorkData";



const Project = () =>{
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Here's some of my recent projects"/>
      <WorkData/>
      <Footer/>
      
    </div>
  );
};

export default Project;