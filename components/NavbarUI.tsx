import { Input } from 'postcss'
import React from 'react'

const NavbarUI = () => {
  return (
    <nav className='flex justify-around p-3 fixed w-full bg-white'>
      <div className='font-bold font-sans text-teal-800'>Logo Name</div>
      <input className='p-2 border border-teal-400 outline-none' placeholder='Search'/>
      <button className='p-2 bg-teal-600 text-white rounded-lg'>Login</button>
    </nav>
  )
}

export default NavbarUI
