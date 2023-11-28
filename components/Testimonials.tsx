import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate,faChevronRight,faTrain,faEnvelope,faBriefcase} from '@fortawesome/free-solid-svg-icons'


const Testimonials = () => {
  return (
    <section className=' degree md:gap-0 gap-3
      flex flex-wrap w-full p-10 h-full mt-4
       text-white '>
      <div className='flex flex-col leading-10 p-12 lg:w-2/6 md:w-3/6'>
            <div className='text-3xl font-bold'>CodeClause Internship Program</div>
            <div className='text-lg'>Join the Virtual Internship Program in emerging technologies with CodeClause.</div>
            <div className='flex border text-center justify-center md:w-4/6 w-full border-teal-300 px-5 py-1 rounded-full '>
                <button className=''>  About us </button>
                <small> <FontAwesomeIcon icon={faChevronRight} className='w-2 mt-4 ml-4'/></small>

            </div>
      </div> 
     <div className='md:w-2/6 gap-2'>
        <div className=' leading-9'>
          <FontAwesomeIcon icon={faCertificate} className='w-4 text-teal-600 text-center'/>
          <div className='font-bold text-2xl'>Get Certified</div>
          <div className='text-slate-500 font-serif '>Get certified in your intrested domain with CodeClause Internship Program</div>
        </div>
        <div className='leading-9'>
          <FontAwesomeIcon icon={faTrain} className='w-4 text-teal-600'/>
          <div className='font-bold text-2xl'>Get Certified</div>
          <div className='text-slate-500 font-serif '>Get certified in your intrested domain with CodeClause Internship Program</div>
        </div>
     </div>
     <div className='md:w-2/6 gap-2'>
        <div className=' leading-9'>
          <FontAwesomeIcon icon={faEnvelope} className='w-4 text-teal-600'/>
          <div className='font-bold text-2xl'>Get Certified</div>
          <div className='text-slate-500 font-serif '>Get certified in your intrested domain with CodeClause Internship Program</div>
        </div>
        <div className='leading-9'>
          <FontAwesomeIcon icon={faBriefcase} className='w-4 text-teal-600'/>
          <div className='font-bold text-2xl'>Get Certified</div>
          <div className='text-slate-500 font-serif '>Get certified in your intrested domain with CodeClause Internship Program</div>
        </div>
     </div>
      
    </section>
  )
}

export default Testimonials
