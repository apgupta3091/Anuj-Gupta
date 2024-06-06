import React from 'react'
import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap
} from "react-icons/di";
import omfood from "../assets/omfood.png";
import us from "../assets/U.S.png";
import youtube from "../assets/youtube.png";
const About = () => {
  return (
    <div className='max-w-[1000px] mt-24 mx-auto p-6 grid grid-cols-1 gap-8 place-items-center md:grid-cols-2' id="about">
        <div className='p-6'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
            <p className='text-gray-300 mb-4'>
                A passionate fullstack web developer with over 2 years of experience,
                I have a proven track record of creating highly efficient, visually stunning,
                responsive websites.
            </p>
            <div className='flex flex-wrap gap-4 text-4xl justify-center'>
                <DiHtml5 className='text-orange-600'/>
                <DiCss3 className='text-blue-600'/>
                <DiSass className='text-pink-600'/>
                <DiBootstrap className='text-purple-600'/>
                <DiJavascript1 className='text-yellow-500'/>
                <DiReact className='text-blue-500'/>
                <DiNodejsSmall className='text-green-500'/>
            </div>
        </div>

            <div className='relative group'>
                <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-300 to-orange-900 rounded-lg
                        blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
                <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={us} alt="project1" className='rounded-lg md:max-w-[360px]'/>
                </div>
            </div>
            <div className='relative group order-2 md:order-1'>
                <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-300 to-orange-900 rounded-lg
                        blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
                <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={omfood} alt="project2" className='rounded-lg md:max-w-[360px]'/>
                </div>
            </div>
            <div className='p-6 order-1 md:order-2'>
                <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend Experience</h2>
                <p className='text-gray-300 mb-4'>
                    Experience in creating modern, responsive web applications using 
                    the latest frontend technologies.
                </p>
            </div>
            <div className='p-6 order-3'>
                <h2 className='text-gray-200 text-3xl font-bold mb-4'>Backend Experience</h2>
                <p className='text-gray-300 mb-4'>
                    Experience in creating efficient, reliable, and scalable web applications using 
                    the latest backend technologies.
                </p>
            </div>
            <div className='relative group order-4'>
                <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-300 to-orange-900 rounded-lg
                            blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
                <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={youtube} alt="project3" className='rounded-lg md:max-w-[360px]'/>
                </div>
            </div>
    </div>
  )
}

export default About