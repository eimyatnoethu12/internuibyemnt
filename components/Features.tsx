import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile,faRectangleList,faUser, faHeadphones} from '@fortawesome/free-solid-svg-icons'

const Features = () => {
  return (
    <div className='flex gap-3 justify-evenly  relative mt-4 flex-wrap '>
        <div className='leading-loose relative '>
            <FontAwesomeIcon icon={faFaceSmile} className='absolute text-center left-20 w-10 mb-3 text-teal-500 bg-white shadow p-2 rounded-full'/>
            <div className='bg-white mt-4 py-6 px-12 -z-20 shadow-md'>
            <div>11495</div>
            <div>Happy Interns</div>
            </div>
           
        </div>
        <div className='leading-loose relative '>
            <FontAwesomeIcon icon={faRectangleList} className='absolute text-center left-20 w-10 mb-3 text-teal-500 bg-white shadow p-2 rounded-full'/>
            <div className='bg-white mt-4 py-6 px-12 -z-20 shadow-md'>
            <div>25</div>
            <div>Total Trainers</div>
            </div>
           
        </div>
        <div className='leading-loose relative '>
            <FontAwesomeIcon icon={faUser} className='absolute text-center left-20 w-10 mb-3 text-teal-500 bg-white shadow p-2 rounded-full'/>
            <div className='bg-white mt-4 py-6 px-12 -z-20 shadow-md'>
            <div>700</div>
            <div>Abroad Interns</div>
            </div>
           
        </div>
        <div className='leading-loose relative '>
            <FontAwesomeIcon icon={faHeadphones} className='absolute text-center left-20 w-10 mb-3 text-teal-500 bg-white shadow p-2 rounded-full'/>
            <div className='bg-white mt-4 py-6 px-12 -z-20 shadow-md'>
            <div>24</div>
        <div>Hours of Support</div>
            </div>
           
        </div>
        
      
    </div>
  )
}

export default Features
