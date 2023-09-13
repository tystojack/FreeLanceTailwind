import React from 'react'

function MainHome() {
  return (
    <div className='w-screen  flex justify-center items-center flex-col mb-20'>

    <div className=' bg-black flex items-center justify-between w-screen max-w-xl border-2 border-purple-600 rounded-lg mt-2'>
    <div className='w-full  flex items-center   justify-center'>
        <h1 className='text-2xl font-bold text-white'>Responsive Design</h1>
        </div>
        <div className='w-1/4 mr-8'>

        <img src="/mobile.png" alt="computer" className='object-contain '/>
        </div>
    </div>
    <div className=' bg-black flex items-center justify-between w-screen max-w-xl border-2 border-purple-600  rounded-lg mt-2'>
    <div className='w-full  flex items-center   justify-center'>
        <h1 className='text-2xl font-bold text-white'>Intuitive User Interface</h1>
        </div>
        <div className='w-1/4 mr-8'>

        <img src="/ui.jpg" alt="computer" className='object-contain '/>
        </div>
    </div>
    <div className=' bg-black flex items-center justify-between w-screen max-w-xl border-2 border-purple-600  rounded-lg mt-2'>
    <div className='w-full  flex items-center   justify-center'>
        <h1 className='text-2xl font-bold text-white'>Minimalist Design </h1>
        </div>
        <div className='w-1/4 mr-8'>

        <img src="/trophy.svg" alt="computer" className='object-contain bg-purple-500 '/>
        </div>
    </div>
    <div className=' bg-black flex items-center justify-between w-screen max-w-xl border-2 border-purple-600  rounded-lg mt-2'>
    <div className='w-full  flex items-center   justify-center'>
        <h1 className='text-2xl font-bold text-white'>Multiple Pages</h1>
        </div>
        <div className='w-1/4 mr-8'>

        <img src="/book.svg" alt="computer" className='object-contain bg-purple-500 '/>
        </div>
    </div>
    </div>
  )
}

export default MainHome