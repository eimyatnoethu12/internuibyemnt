import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faViber, faInstagram,faLinkedinIn,faFacebook } from '@fortawesome/free-brands-svg-icons'
const FooterUL = () => {
  return (
    <div className='flex justify-between mt-5 bg-black p-6 text-white'>
      <div>
        <div>© Copyright CodeClause Internship. All Rights Reserved</div>
        <div>
        Designed by 
        <a href='https://codeclause.com/' className='text-teal-500 outline-none no-underline'>CodeClause</a>
        </div>
      </div>
      <div className='flex gap-4 '>
      <FontAwesomeIcon icon={faViber} className='w-10 bg-gray-600  p-2 h-10 hover:bg-teal-400'/>
      <FontAwesomeIcon icon={faFacebook} className='w-10 bg-gray-600  p-2 h-10 hover:bg-teal-400' />
      <FontAwesomeIcon icon={faInstagram} className='w-10 bg-gray-600  p-2 h-10 hover:bg-teal-400' />
      <FontAwesomeIcon icon={faLinkedinIn} className='w-10 bg-gray-600  p-2 h-10 hover:bg-teal-400' />

      </div>
    </div>
  )
}

export default FooterUL
