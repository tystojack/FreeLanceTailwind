"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function SideHeader() {
  const [open, setOpen]= useState(false);
  const [start,setStart] = useState(true)
  console.log(open, "the open")
  const OpenDrawer = (e: any)=> {
    e.stopPropagation();
    setStart(false)
    setOpen(true)
    console.log("open drawer ran")
  }
  const CloseDrawer = (e: any)=> {
    e.stopPropagation();
    setOpen(false)
    setStart(false)
    console.log("close drawer ran ")
  }

  const WrapperStyle = ()=> {
    if(open && start === false) {
      return "pointer-events-auto"
    } else if(open=== false && start=== false) {
      return "pointer-events-none"
    } else {
      return 'invisible'
    }
  }
  const DrawerStyle = ()=> {
    if(open=== true) {
      return "animate-OpenDrawer"
    } else if (open === false) {
return "animate-CloseDrawer"
    }
  }
  return (
    <div>
        <div onClick={(e)=> CloseDrawer(e)} className={`w-full h-full ${WrapperStyle()}  fixed top-0 left-0`}>
            <div onClick={(e)=> e.stopPropagation()}  className={`w-3/5 h-full  bg-stone-900 fixed right-0 ${DrawerStyle()} `}>
                <div className='  flex flex-col items-center h-44 justify-around mt-4 '>

                <button onClick={(e)=> CloseDrawer(e)} className='text-stone-200 text-3xl'>
                    <Link href="/About">
                    About
                    </Link>
                    </button>
                <button onClick={(e)=> CloseDrawer(e)} className='text-stone-200 text-3xl'> <Link href="/ProductPage">
                Product Page
                </Link> 
                </button>
                <button  onClick={(e)=> CloseDrawer(e)} className='text-stone-200 text-3xl'>
                    <Link href="/ImageSlider">
                    Image Slider
                    </Link>
                    </button>
                </div>
            </div>
        </div>
        <div onClick={(e)=> OpenDrawer(e)}>

<svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='bg- fill-current text-stone-50 h-10 w-10 md:hidden mr-6 bg-stone-900 rounded-md'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
        </div>

    {/* <div>SideHeader</div> */}
    </div>
  )
}

export default SideHeader