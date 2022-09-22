import React from "react";
import { useState,useEffect,useRef } from "react";
import CTA from "./CTA";
import "./header.css";
import FOG from 'vanta/dist/vanta.fog.min'
const Header = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x313131,
        midtoneColor: 0x49c849,
        lowlightColor: 0x28282f,
        baseColor: 0x2eca2e
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])



  return (
    
    <div>
    <div ref={myRef} className="clipath"></div>
      <header id="Home">
        <div className="container header_container">
          <img className="profile_photu" src="/assets/profile.gif" alt="" />
          <div className="header_content">
            <h4 id="hello">Hello I'm</h4>
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
