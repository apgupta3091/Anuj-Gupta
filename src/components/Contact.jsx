import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mt-24 mx-auto grid md:grid-cols-2 place-items-center' id='contact'>
        <div>
            <div className='text-gray-300 my-3 p-2'>
                <h3 className='text-4xl font-semibold mb-5'>Let's <span>Connect</span></h3>
                <p className='text-justify leading-7'>
                Looking to collaborate on innovative projects or just want to chat about the latest in tech? I'm always excited to connect with fellow enthusiasts, potential collaborators, and industry professionals. Whether you have a challenging problem to solve, a great idea to discuss, or simply want to share insights, feel free to reach out. Let's create something amazing together!
                </p>
            </div>
            <div className='flex mt-10 items-center gap-7'>
            <div className='bg-[#252525] p-5 rounded-lg'>
                    <h3 className='text-2xl md:text-4xl font-semibold text-gray-200'>10 <span>+</span></h3>
                    <p className='text-xs md:text-base text-gray-200'>Projects</p>
                </div>
                <div className='bg-[#252525] p-5 rounded-lg'>
                    <h3 className='text-2xl md:text-4xl font-semibold text-gray-200'>2 <span>+</span></h3>
                    <p className='text-xs md:text-base text-gray-200'>Years experience</p>
                </div>
                
            </div>
        </div>
        <form action="https://getform.io/f/pbnvdjwb" method="POST" className='max-w-6xl p-5 md:p-12' id="form">
            <input 
                type="text" 
                id="name"
                placeholder='Your name...'
                name="name"
                className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
            />
            <input 
                type="email" 
                id="email"
                placeholder='Your email...'
                name="email"
                className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
            />
            <textarea 
                type="textarea" 
                id="textarea"
                cols="30"
                rows="4"
                placeholder='Your message...'
                className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
            />
            <button type='submit' className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact