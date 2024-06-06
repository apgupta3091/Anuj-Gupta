import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
import { FaG } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>A. Gupta</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
            <a href="https://github.com/apgupta3091" target="_blank" className='hover:scale-110 transition-transform duration-300'><FaGithubSquare /></a>
            <a href="https://www.instagram.com/anujgupta19/" target="_blank" className='hover:scale-110 transition-transform duration-300'><FaInstagram /></a>
                
            </div>
        </div>
        <p className='text-gray-400'>@2024 A. Gupta</p>
    </div>
  )
}

export default Footer