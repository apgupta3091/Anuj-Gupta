import React, { useState } from 'react'
import youtube from "../assets/youtube.png";
import omfood from "../assets/omfood.png";
import us from "../assets/U.S.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from 'react-icons/ai';

const Portfolio = () => {
  const projects = [
    {
        img: youtube,
        title: "Youtube Backend clone",
        description: "Backend clone of youtube video processing services using Node.js",
        links: {
            site: "",
            github: "https://github.com/apgupta3091/youtube-backend-clone"
        }
    },
    {
        img: us,
        title: "U.S. Software Jobs",
        description: "Map of US states depicting number of swe jobs in state using D3.js",
        links: {
            site: "https://apgupta3091.github.io/U.S.-Software-Jobs/",
            github: "https://github.com/apgupta3091/U.S.-Software-Jobs"
        }
    },
    {
        img: omfood,
        title: "Omnifood Food Service",
        description: "Food delivery service UI created using HTML, CSS, and JS",
        links: {
            site: "https://apgupta3091.github.io/Omfood/",
            github: "https://github.com/apgupta3091/Omfood"
        }
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className='mt-24 my-6 max-w-[1200px] mx-auto grid grid-cols-1 gap-6 md:grid-cols-8' id="portfolio">
        <div className='relative z-10 col-span-3 grid place-items-center grid-cols-1'>
            <p className='text-gray-200 font-bold text-4xl -skew-y-6 mb-10 md:mb-0'>Select Project</p>
            <img className='absolute w-[50px] top-10 right-0 md:right-12' src={arrow} alt="arrow" />
            <ul className='ml-6 flex flex-row md:flex-col flex-wrap justify-center gap-6 md:gap-6 space-y-2 md:space-y-4 text-2xl'>
                {projects.map((project, i) => (
                    <li 
                    key={i} 
                    onClick={() => setCurrentProject(i)}
                    className={`cursor-pointer text-gray-300 ${currentProject === i ? 'active-project' : ''}`}
                    
                    >{project.title}</li>
                ))}
            </ul>
        </div>
        <div className='z-10 glass w-full col-span-5'>
            <div className='w-full h-80'>
                <img src={projects[currentProject].img} alt={projects[currentProject].title}
                    className='w-full h-full object-cover rounded-lg mb-4'
                />
            </div>
            <div className='p-6 '>
                <p className='text-gray-200 my-4'>{projects[currentProject].description}</p>
                <div className='flex space-x-4'>
                    {projects[currentProject].links.site === "" ? null : (
                        <a href={projects[currentProject].links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                            target='_blank'
                        >View Site</a>

                    )}
                    <a href={projects[currentProject].links.github}
                        className='text-2xl px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                        target="_blank"
                    ><AiFillGithub /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio