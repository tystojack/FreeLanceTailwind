import React from 'react'
import Image from 'next/image'
import RequestSite from './RequestSite'
function Hero() {
  return (
    <div className='flex flex-col mt-16 bg-stone-900 md:flex-row md:max-w-7xl md:m-auto mb-8 md:mb-12 md:mt-10'>

    <div className="   pt-5 pb-5 flex flex-col justify-center items-center md:w-2/3  ">
        
        <h2 className='text-6xl p-5 mb-4 font-bold text-white md:text-7xl lg:text-8xl'>
       Code Clap
        </h2>
        <h2 className=' text-center max-w-xs text-2xl font-semibold text-stone-50'>Bringing Businesses and Ideas to the Web</h2>


        </div>
        <div className='w-screen  flex flex-col  justify-center items-center md:w-1/2'>
<div className=' w-1/2 flex max-w-xs   jutify-center items-center relative md:mt-11 '>
    <img src='/computer.png' alt='computer' className='object-contain z-10 md:mt-10 ' />
    {/* <img src="/blob.svg" alt="blob"  className="absolute  h-3/5 w-3/5 "/> */}
</div>
            <div className='  m-3'>

{/* <button className='text-stone-50 bg-purple-600  text-2xl rounded-md  p-3 bord font-semibold '>Request Site</button> */}
            </div>
        </div>
    </div>
  )
}

export default Hero