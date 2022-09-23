import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AboutData from "./About_data.js";
import anime from "animejs";
import "./about.css";
import { useRef } from "react";
import { Parallax } from 'react-parallax';

const About = () => {
  const parallex = useRef()
  const [job, SetJob] = useState(AboutData);
  const [value, setValue] = useState(0);
  const { title, id, info } = job[value];


  return (
    <Parallax className='image'  bgImage="https://media.istockphoto.com/photos/black-brick-wall-picture-id1324275828?b=1&k=20&m=1324275828&s=170667a&w=0&h=ZM6xFbD4UCIMSJGvWY8emce_faY6qgnPQSb4Yq4GRv8="  strength={200}>
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
      <div className="About_container">
        <div className="btnContainer">
          {AboutData.map((item,index)=>{
               return <button onClick={()=>setValue(index)} key={index}>{item.title}</button>
          })}
        </div>
        <div className="infoContainer">
          <h1>{title}</h1>
          <div className="info ">
            {info}
          </div>
        </div>
      </div>
      </div>
    </section>
    </Parallax>
  );
};

export default About;
