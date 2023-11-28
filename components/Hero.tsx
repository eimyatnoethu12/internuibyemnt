import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <>
    <div className=''>
    <div className='absolute h-screen inset-0 bg-black opacity-70'></div>
    <div className='w-full h-screen'>
    <img
      alt='background'
      className='w-full h-full object-cover'
      src={
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    />
    <div className='absolute top-36 left-24 w-2/4'>
        <div className='md:text-5xl text-3xl text-white font-sans font-bold '>We Empower you to find the right career path</div>
        <br/>
        <div className='text-lg text-white font-sans font-normal '>Join the Virtual Internship Program in emerging technologies with CodeClause</div>
        <br/>
        <button className='bg-teal-400 text-white px-8 py-4 rounded-lg '>Apply Now</button>
  
    </div>
   </div>
    </div>
    </>
  )
}

export default Hero
