import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me3.png";
import "./header.css";
import { useState } from "react";

const Header = () => {
  return (
    <div>
      <header id="Home">
        <div className="container header_container">
          <div className="header_content">
            <h4>Hello I'm</h4>
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