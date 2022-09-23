import React from "react";
import { useState } from "react";
import "./experience.css";
import expData from "./Experience_data.js";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import Slider from "react-slick";
import 'react-circular-progressbar/dist/styles.css';
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'
import { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

const Experience = () => {

  const [imageIndex,setImageIndex] = useState(0)
  const [slides,setSlides] = useState(3);
  const [Progerss,setProgress] = useState(0);
  
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <AiOutlineRight />
      </div>
    );
  };



  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <AiOutlineLeft />
      </div>
    );
  };

  const skill = {
    width:'90vw',
    height:'100%',
    margin:'auto',
    textAlign:'center'
  }

  const settings = {
    Infinite:true,
    speed:300,
    slidesToShow:slides,
    centerMode:true,
    centerPadding:0,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    beforeChange:(current,next) => setImageIndex(next)
}

useEffect(()=>{

  window.addEventListener('resize',()=>{
    if(window.innerWidth<=600){
      setSlides(2)
    }
    if(window.innerWidth>600){
      setSlides(3)
    }
  })

  expData.forEach((item,idx)=>{
      setProgress(item.exp)
  })
  
  // anime({
  //   targets: '#hello span',
  //   bottom:'0px',
  //   color:'#fff',
  //   opacity:1,
  //   delay:2000,
  //   delay: anime.stagger(100)
  // });
})



  return (
    <section id="experience">

    {/* SLIDING CAROUSEL */}
    
    {/* <div style={skill} className="skills_cont">
      <Slider {...settings}>
      {expData.map((item,idx)=>{
        return (
          <div  className="circular_bar" style={{width:'100px'}} key={item.id}>
          <CircularProgressbar 
          value={item.exp} 
          text={`${item.name}`} 
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'round',
            textSize: '8px',
            pathTransitionDuration: 0.5,
            pathColor: `#58ff4d`,
            textColor: '#f88',
            trailColor: '#171819',
            backgroundColor: '#3e98c7',
          })}
          />
          </div>
        )
      })}
      </Slider>
    </div> */}



      <h5>what Skilld i Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
      <div className="experience_frontend">
      <h3>Frontend Developemnt</h3>
      <div className="experience_content">
      {expData.map((item, index) => {
              const { id, name, exp } = item;
              if (index < 4) {
                return (
                  <article key={id} className="experience_details">
                    <i
                      className="fa fa-check-circle Check_icon"
                      aria-hidden="true"
                    ></i>
                    <div>
                      <h4>{name}</h4>
                      <progress value={exp} max="100">
                        {" "}
                        {exp}{" "}
                      </progress>
                    </div>
                  </article>
                );
              }
            })}
          </div>
        </div>
        {/* END OF FRONT END */}
        <div className="experience_backend">
          <h3>Other Skills</h3>
          <div className="experience_content">
            {expData.map((item, index) => {
              const { id, name, exp } = item;
              if (index >= 4) {
                return (
                  <article key={id} className="experience_details">
                    <i
                      className="fa fa-check-circle Check_icon"
                      aria-hidden="true"
                    ></i>
                    <div>
                      <h4>{name}</h4>
                      <progress value={exp} max="100">
                        {" "}
                        {exp}{" "}
                      </progress>
                    </div>
                  </article>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
