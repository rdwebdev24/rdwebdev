import React, { useEffect } from 'react'
import './project.css'
import projectData from './Project_data.js'
import Slider from 'react-slick'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'
import {BsBoxArrowInUpRight} from 'react-icons/bs'
import { useState } from 'react'
import { Parallax } from 'react-parallax'
const Projects = () => {

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

  const [imageIndex,setImageIndex] = useState(0);
  const [slides,setSlides] = useState(3);
  useEffect(()=>{
    const windoWidth = document.body.getBoundingClientRect().width;
      if(windoWidth>=768){
        setSlides(3)
      }
      if(windoWidth<768 && windoWidth>=600){
        setSlides(2)
      }
      if(windoWidth<600){
        setSlides(1)
      }
  })
  
  
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

const [style,setStyle] = useState({bottom:'0',opacity:'0'})
  


const handleEnter = (idx)=>{
  console.log(idx,imageIndex)
  if(idx==imageIndex){
    setStyle({
      bottom:'0',
      opacity:'1'
    })
  }

}

const handleLeave = (idx)=>{
  if(idx==imageIndex){
    setStyle({
      bottom:'-100%',
      opacity:'0'
    })
  }
}


  return (
    <Parallax className='image project_paralex' bgImage='https://media.istockphoto.com/photos/black-brick-wall-picture-id1324275828?b=1&k=20&m=1324275828&s=170667a&w=0&h=ZM6xFbD4UCIMSJGvWY8emce_faY6qgnPQSb4Yq4GRv8=' strength={200}>

      <section id='project'>
        <h5>My Work</h5>
        <h2>Projects</h2>
        <div className="Carousel">
          <Slider {...settings}>
          {projectData.map((item,idx)=>{
              return <div className={idx==imageIndex?"slide activeSlide":"slide"} key={item.id}>
                <img onMouseEnter={()=>handleEnter(idx)} onMouseLeave={()=>handleLeave(idx)} src={item.img} alt={item.img} className="slide_images"/>
                <div onMouseEnter={()=>handleEnter(idx)} onMouseLeave={()=>handleLeave(idx)} style={idx==imageIndex?style:{}} className="showDetail">
                  <a href={item.gitUrl} target="_blank" className='btn btn-primary project_btn'><h3>Github</h3></a>
                  <a href={item.liveDemourl} target="_blank" className='btn btn-primary project_btn'><h3>Live Demo</h3></a>
                </div>
              </div>
          })}
          </Slider>
         
        </div>
      </section>
    </Parallax>
  )
}

export default Projects
