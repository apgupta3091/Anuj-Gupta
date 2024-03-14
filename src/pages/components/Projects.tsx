import React from 'react'


import US from '../../images/U.S.png'
import omfood from '../../images/omfood.png'
import tindog from '../../images/tindog.png'

export default function project() {
  
  return (
    <div id="Projects">
        <div className="projects-text">
            <p className='projects-name'>My Recent Work</p>
            <p className='projects-description'>Here are a few projects I've worked on recently. Want to see more?<a className="email" href = "mailto: apgupta@syr.edu"> Email me.</a> </p>
        </div>
        <div className="project-container">
          <div className="projects">
          <a target="_blank" className="overlay-a" href='https://apgupta3091.github.io/U.S.-Software-Jobs/'>
              <img className='project-img' id="img-1" src={US}></img>
              <div className='background none'>
                <h5>U.S. Software Jobs</h5>
                <p className="overlay-p">Data visualization project to track software engineering jobs Built with D3.js and U.S.A Jobs API</p>
              </div>
          </a>

          </div>
          <div className="projects">
          <a target="_blank" className="overlay-a" href='https://apgupta3091.github.io/Omfood/'>

              <img className='project-img' src={omfood}></img>
              <div className='background none'>
                <h5>Omnifood</h5>
                <p className="overlay-p">Online healthy meal delivery service Built HTML, CSS, Jquery</p>
              </div>

          </a>
          </div>
          <div className="projects">
          <a target="_blank" className="overlay-a" href='https://apgupta3091.github.io/TinDog/'>

              <img className='project-img' src={tindog}></img>
              <div className='background none'>
                <h5>TinDog</h5>
                <p className="overlay-p">Tinder for dogs Built with HTML, CSS, Javscript</p>
              </div>

          </a>

          </div>
        </div>
    </div>
  )
}