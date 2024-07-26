import React from 'react'
import Navbar from "../Components/nav/Navbar";
import Footer from "../Components/footer/Footer";
import Heroimg2 from '../Components/hero/Heroimg2';
import Form from '../Components/form/Form';



const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT." text="Get in touch "/>
      <Form/>
      <Footer/>
      
    </div>
  );
};

export default Contact;