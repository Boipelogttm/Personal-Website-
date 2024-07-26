import "./Heroimg.css";
import IntroImg from "../Images/Boipelo.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return <div className="hero"> 
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>

    </div>
    <div className="content">
        <p>HELLO, WELCOME TO MY PORTFOLIO</p>
        <h1> Software Developer.</h1>
        <div>
            <Link to="/project" className="btn">Projects
            </Link>
            <Link to="/contact" className=" btn btn-ligt">Contact
            </Link>
        </div>
    </div>
    </div>;
  
};

export default Heroimg;