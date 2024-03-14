import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import '../../App.css';

export default function about() {
  return (
    <div className='about'>
        <div className='top-about-content'>
            <div className='top-about-text-container'>
                <h3 className="hi">Hi, I'm Anuj. Nice to meet you.</h3>
                <p className="about-p">Since beginning my journey as a software engineer nearly 5 years ago, I've done remote work for startups, I've received a degree from Syracuse University, and have collaberated with many talented individuals.</p>
            </div>
        </div>
        <div className="bottom-about-content">
            <div className="about-box">
                <div className="about-bg">
                    <div className="about-box-item">
                        <div className="about-box-item-container" id="first-one">
                            <FontAwesomeIcon className='icon' icon={faCode} />
                            <h3>Front-End Developer</h3>
                            <p className='description'>I enjoy bringing ideas to life in the browser</p>
                            <p className='description-title'>Languages and Frameworks:</p>
                            <p className='languages'>HTML, CSS, Javascript, Sass, React, Redux</p>
                        </div>
                    </div>
                    <div className="about-box-item about-box-item2">
                        <div className="about-box-item-container">
                            <FontAwesomeIcon className='icon icon2' icon={faDatabase} />
                            <h3>Back-End Developer</h3>
                            <p className='description'>I value System Design and API design & development</p>
                            <p className='description-title'>Languages and Frameworks:</p>
                            <p className='languages'>Javascript, Python, Java, SpringBoot, Node, Django</p>


                        </div>
                    </div>
                    <div className="about-box-item">
                        <div className="about-box-item-container"> 
                            <FontAwesomeIcon className='icon' icon={faLaptopCode} />
                            <h3>Full-Stack Developer</h3>
                            <p className='description'>I love to put everything together and build powerful web applications</p>
                            <p className='description-title'>Databases & More:</p>
                            <p className='languages'>PostgreSQL, MongoDB, Docker, AWS</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
