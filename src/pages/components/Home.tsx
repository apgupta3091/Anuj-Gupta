import React from 'react'
import Anuj from "../../images/AvatarMaker.png";
import resume from "../../docs/resume.pdf";
import '../../App.css';


export default function Home() {
  return (
    <div className='home'>
      <nav className="navbar">
        <p className="logo">AG</p>
        <a className='resume' href={resume} download="Anuj Gupta Resume.pdf">Resume</a>
      </nav>
      <div className='home-content'>
        <h1>Full-stack Developer</h1>
        <h3 className="decription">I design and code beautifully simple things and love what I do.</h3>

        <img className='img' src={Anuj} />
      </div>


    </div>
  )
}
