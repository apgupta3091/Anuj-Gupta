import React, { Component } from 'react';
import presently from '../../images/presently.png';
import cdLogo from "../../images/cdLogo.svg";



class Work extends Component {
    render() {
        return (
            <div id="Work">
                <div className="work-text">
                    <p className="work-name">My Recent Work Experience</p>
                    <p className='work-description'>Here are a few places I've gathered experience recently.</p>
                </div>
                    
                <div className="work-container">
                <div className='work-items'>
                        <div className='work-top-container'>
                            <div className='work-top-content'>
                                <h2 className="year">2022 - Present</h2>
                                <h4 className="title">Full Stack Software Engineer</h4>
                                <div className="work-img">
                                    <img className='work-img-img2' src={cdLogo}></img>
                                </div>
                            </div>
                            
                        </div>
                        <div className='p-container'>
                            <p className="work-p">- Successfully refactoring the entire frontend of app.cyberdive.co</p>
                            <p className="work-p">- Lead the development of the shared parent dashboard feature.</p>
                            <p className="work-p">- Playing a key role in end-to-end testing with Cypress while adhering to industry best practices such as fixtures and intercepts.</p>
                            <p className="work-p">- Contributing to the setup of the CI/CD pipelines.</p>
                        </div>
                    </div>
                    <div className='work-items'>
                        <div className='work-top-container'>
                            <div className='work-top-content'>
                                <h2 className="year">2020 - 2020</h2>
                                <h4 className="title">Software Engineer Intern</h4>
                                <div className="work-img">
                                    <img className='work-img-img2' src={presently}></img>
                                </div>
                            </div>
                            
                        </div>
                        <div className='p-container'>
                            <p className="work-p">- Automated the Presently group gifting message system using JavaScript.</p>
                            <p className="work-p">- Designed and implemented a dynamic referral page that personalized content based on query data from Presently’s database.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;