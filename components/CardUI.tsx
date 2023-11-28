import React from 'react'

const CardUI = () => {
  return (
    <div className='mt-4 flex flex-wrap m-1'>
      <div className="max-w-md shadow-lg text-center w-4/12 h-full p-4
      mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl ">
        <div className="md:flex   items-center">
          <div className="md:flex-shrink-0">
            <img width={100} height={100} className="h-48 w-full 
            object-cover  md:w-48" src={'https://insaneimpact.com/storage/2022/05/16-9-Formula.jpg'} alt="Card"/>
          </div>
          <div className="p-2">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Category</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Title of the card</a>
            <p className="mt-2 text-gray-500  md:text-lg text-xs">Description of the card. You can add more details here.</p>
          </div>
        </div>
        <p className='text-slate-400 md:text-xl text-sm mt-3'>
          <span className='text-pink-200 md:text-lg text-sm'>"</span>Awesome<span className='text-pink-200 md:text-lg text-sm'>"</span>
        </p>
      </div>
      <div className="max-w-md shadow-lg text-center w-4/12 h-full p-4
      mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl ">
        <div className="md:flex   items-center">
          <div className="md:flex-shrink-0">
            <img width={100} height={100} className="h-48 w-full 
            object-cover  md:w-48" src={'https://insaneimpact.com/storage/2022/05/16-9-Formula.jpg'} alt="Card"/>
          </div>
          <div className="p-2">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Category</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Title of the card</a>
            <p className="mt-2 text-gray-500  md:text-lg text-xs">Description of the card. You can add more details here.</p>
          </div>
        </div>
        <p className='text-slate-400 md:text-xl text-sm mt-3'>
          <span className='text-pink-200 md:text-lg text-sm'>"</span>Awesome<span className='text-pink-200 md:text-lg text-sm'>"</span>
        </p>
      </div>
      <div className="max-w-md shadow-lg text-center w-4/12 h-full p-4
      mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl ">
        <div className="md:flex   items-center">
          <div className="md:flex-shrink-0">
            <img width={100} height={100} className="h-48 w-full 
            object-cover  md:w-48" src={'https://insaneimpact.com/storage/2022/05/16-9-Formula.jpg'} alt="Card"/>
          </div>
          <div className="p-2">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Category</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Title of the card</a>
            <p className="mt-2 text-gray-500  md:text-lg text-xs">Description of the card. You can add more details here.</p>
          </div>
        </div>
        <p className='text-slate-400 md:text-xl text-sm mt-3'>
          <span className='text-pink-200 md:text-lg text-sm'>"</span>Awesome<span className='text-pink-200 md:text-lg text-sm'>"</span>
        </p>
      </div>





    </div>
  )
}

export default CardUI
