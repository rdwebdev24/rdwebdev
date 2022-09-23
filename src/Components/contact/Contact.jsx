import React from "react";
import "./contact.css";
import Social_icon from "./Social_icon";
import { Parallax } from "react-parallax";
const Contact = () => {
  return (
    <Parallax className="image" strength={200} bgImage="/assets/bg1.png">

    <section id="contact">
        <h2 >Let's Talk</h2>
        <h5>Send Email</h5>
      <div className="container container_contact">
        <div className="contact_content">
        <input type="text" placeholder="Your name"/>
        </div>
        <div className="contact_content">
        <input type="text" placeholder="Your Email Id"/>
        </div>
        <div className="contact_content">
        <textarea name="" id="" rows="5" placeholder="Enter message"></textarea>
        </div>
        <div className="contact_content">
        <a className="btn btn-primary" href="#">Send</a>
        </div>
      </div>
      <Social_icon/>
      <a id="ScrollUp" href="#">Scroll Up</a>
    </section>
    </Parallax>
  );
};

export default Contact;
