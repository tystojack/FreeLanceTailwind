import React from 'react'

function MainHome() {
  return (
    <div className='w-screen flex justify-center items-center '>

    <div className=' bg-stone-900 flex items-center justify-between w-screen max-w-xl border-4 border-purple-900  '>
    <div className='w-full h- flex items-center   justify-center'>
        <h1 className='text-2xl font-bold text-white'>Hello</h1>
        </div>
        <div className='w-2/4'>

        <img src="/computer.png" alt="computer" className='object-contain'/>
        </div>
    </div>
    </div>
  )
}

export default MainHome