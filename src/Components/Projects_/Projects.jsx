import React from 'react'
import tunes from '../../assets/tunes.png'
import Chrome from '../../assets/chrome_ext.jpg'
import collage1 from '../../assets/collage.png'
import collage2 from '../../assets/collage2.png'
import student from '../../assets/student.jpg'
import whether from '../../assets/whether.jpg'
import './project.css'
import projectData from './Project_data.js'

const Projects = () => {
  return (
      <section id='project'>
        <h5>My Work</h5>
        <h2>Projects</h2>
        <div className="container container_project">
          {projectData.map((item)=>{
            const {id,name,img,giturl,liveDemourl} = item
            return (
              <article key={id} className="project_item">
              <div className="project_item_image">
                <img src={''} alt={name} />
              </div>
              <h3>{name}</h3>
              <div className="project_item_ct">
                <a href={giturl} className='btn'>Github</a>
                <a href={liveDemourl} className='btn btn-primary'>Live demo</a>
              </div>
            </article>
            )
          })}
         
        </div>
      </section>
  )
}

export default Projects
