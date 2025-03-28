import React from 'react'
import profilePic from "../assets/portfolio-pic.jpeg";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from "react-type-animation";
import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap
} from "react-icons/di";
import resume from "../docs/Anuj Gupta Resume.pdf";

const Hero = () => {
  return (
    <div className='max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0' id="home">
        <div className='grid grid-cols-2 md:col-span-5 p-8 glass'>
            <img className="w-[800px] min-h-[200px]" src={profilePic} alt="profile pic" />
            <div className='my-auto ml-8 flex-col text-gray-200'>
                <p className='text-xl md:text-4xl font-bold'>Hi! I am <br /> Anuj Gupta <br/>
                    <TypeAnimation 
                        sequence={[
                            "Frontend Dev",
                            1000,
                            "Backend Dev",
                            1000,
                            "Fullstack Dev",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </p>
                <p className='text-xl md:text-3xl font-semibold text-gray-400'>with 3+ years experience</p>
                <a href={resume} download={resume}><button className='mt-4 px-4 py-2 text-lg font-bold text-white bg-primary-color rounded-xl'
                download
                >Download CV</button></a>
            </div>
        </div>
        <div className='grid md:col-span-3 gap-6'>
            <div className='text-5xl p-12 glass'>
                <p className='text-gray-200 text-xl font-bold mb-4 text-center'>My Tech Stack</p>
                <div className='grid grid-cols-4 gap-4'>
                    <DiHtml5 className='text-orange-600'/>
                    <DiCss3 className='text-blue-600'/>
                    <DiSass className='text-pink-600'/>
                    <DiBootstrap className='text-purple-600'/>
                    <DiJavascript1 className='text-yellow-500'/>
                    <DiReact className='text-blue-500'/>
                    <DiNodejsSmall className='text-green-500'/>
                </div>
            </div>
            <div className='text-6xl gap-5 flex justify-center items-center glass text-gray-600'>
                <a href="https://github.com/apgupta3091" target="_blank" className='hover:scale-110 transition-transform duration-300'><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/anujgupta19/" target="_blank" className='hover:scale-110 transition-transform duration-300'><AiFillLinkedin /></a>
                <a href="https://www.instagram.com/anujgupta19/" target='_blank' className='hover:scale-110 transition-transform duration-300'><AiFillInstagram /></a>

            </div>
        </div>
    </div>
  )
}

export default Hero