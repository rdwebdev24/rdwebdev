import React from 'react'
import './nav.css'

import { useState } from 'react'

const Nav = () => {
  const [activeNav , setActiveNav] = useState('#Home')
  return (
    <nav>
      <a href="#Home" onClick={()=>setActiveNav('#Home')}  className={activeNav === "#Home" ? 'active' : ''}><i className="fa fa-home" aria-hidden="true"></i></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><i className="fa fa-exclamation-circle" aria-hidden="true"></i></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><i className="fa fa-briefcase" aria-hidden="true"></i></a>
      <a href="#project" onClick={()=>setActiveNav('#project')} className={activeNav === "#project" ? 'active' : ''}><i className="fa fa-folder-open" aria-hidden="true"></i></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><i className="fa fa-comments" aria-hidden="true"></i></a>
    </nav>
  )
}

export default Nav
