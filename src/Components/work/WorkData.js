import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WordCardData from "./WorkCardData";

import React from 'react'


const WorkData = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">projects</h1>
        <div className="project-container">
           {WordCardData.map((value, index) =>{
            return(
                <WorkCard
                key={index}
                imgsrc={value.imgsrc}
                title={value.title}
                text={value.text}
                view={value.view}
                />
            )
        },
        )}
        </div>
   </div>
  )
}

export default WorkData;