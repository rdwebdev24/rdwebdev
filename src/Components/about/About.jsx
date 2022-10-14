import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AboutData from "./About_data.js";
import anime from "animejs";
import "./about.css";
import { useRef } from "react";
import { Parallax } from "react-parallax";

const About = () => {
  const parallex = useRef();
  const [job, SetJob] = useState(AboutData);
  const [value, setValue] = useState(0);
  const { title, id, info } = job[value];


  // new code //
  const [sliderHeight, setSliderHeight] = useState(0);
  const [slides, setSlides] = useState(AboutData.length);
  const slider = useRef();
  const slider_left = useRef();
  const slider_right = useRef();
  let activeSlidesIndex = 0;
  
  useEffect(() => {
    setSliderHeight(slider.current.clientHeight);
    setSlides(slider.current.childNodes.length);
    slider_left.current.style.top = `-${(slides - 1) * 70}vh`;
  });

  const handleDown = () => {
    activeSlidesIndex--;
    if (activeSlidesIndex < 0) {
      activeSlidesIndex = slides - 1;
    }
    slider_right.current.style.transform = `translateY(-${
      activeSlidesIndex * sliderHeight
    }px`;
    slider_left.current.style.transform = `translateY(${
      activeSlidesIndex * sliderHeight
    }px`;
  };
  const handleUp = () => {
    activeSlidesIndex++;
    if (activeSlidesIndex > slides - 1) {
      activeSlidesIndex = 0;
    }
    slider_right.current.style.transform = `translateY(-${
      activeSlidesIndex * sliderHeight
    }px`;
    slider_left.current.style.transform = `translateY(${
      activeSlidesIndex * sliderHeight
    }px`;
  };

  // new code ends //

  return (
    <Parallax
      className="image "
      bgImage="https://media.istockphoto.com/photos/black-brick-wall-picture-id1324275828?b=1&k=20&m=1324275828&s=170667a&w=0&h=ZM6xFbD4UCIMSJGvWY8emce_faY6qgnPQSb4Yq4GRv8="
      strength={200}
    >
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div 
        
        ref={slider} className="slider-container">
          <div ref={slider_left} className="left-slide">
            {AboutData.map((item, idx) => {
              return (
                <div key={item.id}>
                  <h1>{item.title}</h1>
                </div>
              );
            })}
          </div>
          <div ref={slider_right} className="right-slide">
            {AboutData.map((item, idx) => {
              return (
                <div key={item.id}>
                  <p className="sliderPara">{item.info}</p>
                </div>
              );
            })}
          </div>
          <div className="action-button">
            <button onClick={handleDown} className="down-button">
              <i className="fas fa-arrow-down" />
            </button>
            <button onClick={handleUp} className="up-button">
              <i className="fas fa-arrow-up" />
            </button>
          </div>
        </div>
        {/* <div className="container slider-container">
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
      </div> */}
      </section>
    </Parallax>
  );
};

export default About;
