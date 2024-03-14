import React from 'react';
import aa from '../../images/aa.png';
import su from '../../images/su.png';

export default function education() {
  return (
    <div id="Education">
        <div className="education-wrapper">
            <div className="ed-text-wrap">
                <p className="education-name">My Recent Education</p>
                <p className='projects-description'>Here are a few places I've crafted my software engineering expertise.</p>
            </div>
            <div className="education-container">
                <div className='education-items'>
                    <div className='education-top-content'>
                        <h2 className="ed-year">2022</h2>
                        <h4 className="ed-title">SOFTWARE DEVELOPMENT</h4>
                    <div className="education-img">
                        <img src={aa}></img>
                    </div>
                        <p className="ed-description">Rigorous 1000+ hour bootcamp with a 4% acceptance rate.</p>
                    </div>
                </div>
                
                <div className='education-items'>
                    <div className='education-top-content'>
                    <h2 className="ed-year">2021</h2>
                        <h4 className="ed-title">INFORMATION SCIENCES</h4>
                    <div className="education-img-2">
                        <img src={su}></img>
                    </div>
                        <p className="ed-description">Bachelor of Science. Focused on Software Development.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}