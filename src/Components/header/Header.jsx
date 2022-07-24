import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me3.png";
import "./header.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import anime from 'animejs';
const Header = () => {
const hello = useRef()
useEffect(()=>{
    const text = hello.current
    text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>")
    const animation = anime.timeline({
      targets:".hello span",
      loop:false,
      easing:"easeInOutExpo",
      duration:2000,
      opacity:1,
     color:"#fff",
 })
 animation.add({
      translateX:function(){
           return anime.random(-500 , 500)
      },
      translateY:function(){
           return anime.random(0 , 300)
      },
      delay:anime.stagger(10),
      
 })
 animation.add({
      rotate:0,
      translateX:0,
      translateY:0,
      delay:anime.stagger(20),
      duration:3000
 })
  },[])
  return (
    <div>
      <header id="Home">
        <div className="container header_container">
          <div className="header_content">
            <h4 ref={hello} className="hello">Hello I'm</h4>
            <h2 id="rohit">
               Rohit
               <span>rohit</span>
               <span>rohit</span>
               <span>dhaakad</span>
          </h2>
            <h5 id="frontend_type" className="text-light">
              Frontend Developer
            </h5>
            <CTA />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
