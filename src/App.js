import React, { useState } from 'react'
// import About from './Components/about/About'
import About2 from './Components/about/About2'
import Contact from './Components/contact/Contact'
// import Experience from './Components/experience/Experience'
import Experience2 from './Components/experience/Experience2'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Projects from './Components/Projects_/Projects'

function App() {
  return (
    <div className="App">
       <Header/>
      <Nav/>
      {/* <About/> */}
      {/* <Experience/> */}
      <About2/>
      <Experience2/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
