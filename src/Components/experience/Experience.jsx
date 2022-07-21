import React from "react";
import { useState } from "react";
import "./experience.css";
import expData from "./Experience_data.js";
const Experience = () => {
  return (
    <section id="experience">
      <h5>what Skilld i Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Developemnt</h3>
          <div className="experience_content">
            {expData.map((item, index) => {
              const { id, name, exp } = item;
              if (index < 6) {
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
              if (index >= 6) {
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
