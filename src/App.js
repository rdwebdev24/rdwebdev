import React, { useState } from 'react'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Experience from './Components/experience/Experience'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Projects from './Components/Projects_/Projects'

function App() {
  return (
    <div className="App">
       <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
