"use client"
import React from 'react'
import Link from 'next/link'

function SideHeader() {
  return (
    <div>
        <div className='w-full h-full  fixed top-0 left-0'>
            <div className='w-3/5 h-full  bg-stone-900 fixed right-0  animate-OpenDrawer'>
                <div className='  flex flex-col items-center h-44 justify-around mt-4'>

                <button className='text-stone-200 text-3xl'>
                    <Link href="/About">
                    About
                    </Link>
                    </button>
                <h2 className='text-stone-200 text-3xl'> <Link href="/ProductPage">
                Product Page
                </Link> 
                </h2>
                <h2 className='text-stone-200 text-3xl'>
                    <Link href="/ImageSlider">
                    Image Slider
                    </Link>
                    </h2>
                </div>
            </div>
        </div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='bg- fill-current text-stone-50 h-10 w-10 md:hidden mr-6 bg-stone-900 rounded-md'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    {/* <div>SideHeader</div> */}
    </div>
  )
}

export default SideHeader