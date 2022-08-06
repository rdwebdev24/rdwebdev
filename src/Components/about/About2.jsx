import React, { useRef } from 'react'
import {useEffect} from 'react';
import './about2.css'
import anime from 'animejs';

const About2 = () => {
     const para = useRef();
     const para_mid = useRef();
     useEffect(() => {
          const handleScroll = event => {
               if(window.scrollY>=200){
                    var tl = anime.timeline({
                         easing: 'easeInExpo',
                         duration: 2000,
                        
                       })
                    .add({
                         targets:".AboutPara1,.head1",
                         translateX:0.1,
                    })
               }
               if(window.scrollY>=350){
                    var tl = anime.timeline({
                         easing: 'easeInExpo',
                         duration: 2000
                       })
                    .add({
                         targets:".AboutPara2,.head2",
                         translateX:0.1,
                    })
               }
               if(window.scrollY>=630){
                    var tl = anime.timeline({
                         easing: 'easeInExpo',
                         duration: 2000
                       })
                    .add({
                         targets:".AboutPara3,.head3",
                         translateX:0.1,
                    })
               }
            console.log('window.scrollY', window.scrollY);
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

  return (
    <div className='About_container'>
      <div className="about_box">
          <div className="about_Text">
               <p  className='AboutPara AboutPara1'>Hello ! I am Rohit Dhakad (enthusiastic :-) Frontend Developer, Quick Leanner and still on the way to sharpen my frontend skills, wish me Luck</p>
          </div>
          <div className="about_image">
               <h1 className='AboutHeading head1'>About</h1>
          </div>
      </div>
      <div className="about_box">
          <div className="about_image">
               <h1 className='AboutHeading head2'>Experience</h1>
          </div>
      <div className="about_Text">
          <p  className='AboutPara AboutPara2'>I have 1 year experience in personal , and currently i am in tech Team of my college website , so... slowly and gradually i am gaining experience </p>
      </div>
      </div>
      <div className="about_box">
          <div className="about_Text">
               <p  className='AboutPara AboutPara3'>some of them are : E-commerce , Hotel Booking , 2D game websites some with the use of React etc...</p>
          </div>
          <div className="about_image">
               <h1 className='AboutHeading head3'>Websites</h1>
          </div>
      </div>
    </div>
  )
}

export default About2
