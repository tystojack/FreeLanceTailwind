"use client"
import React from 'react'
import { useState } from 'react'
function RequestSite() {
    const [open,setOpen] = useState(false);
  return (
    <div className='flex items-center justify-center pb-10'>
        <div>

        </div>
        <div className=' z-20 position fixed flex justify-center items-center top-0 h-screen w-screen '>
            <div className='h-96 max-w-2xl bg-purple-600 w-5/6 min-h-fit  flex justify-around center items-center flex-col absolute'>
                <button className='bg-slate-900 fill-current absolute text-stone-50 h-10 w-10  right-0 top-0'>
                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path  stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

                {/* <img src="x.svg"  className=' object-contain ' /> */}
                </button>
<h1 className=' text-slate-50 md:text-4xl font-bold mt-8 text-2xl'>Request Website</h1>
<div className='flex justify-around items-center flex-col  h-52 mb-10'>

<label className=' text-slate-50 md:text-2xl text-xl  font-semibold'>Email</label>
<input className='' type='email'/>
<label className='text-slate-50 md:text-2xl text-lg text-center  font-semibold  '>What would you like to bring to the Web?</label>
<textarea  className='w-4/5 h-24'/>
</div>
                </div>
        </div>
        <button onClick={()=> setOpen(true)} className='text-stone-50 bg-purple-600  text-2xl rounded-md  p-3 bord font-semibold '>Request Website</button>
    </div>
  )
}

export default RequestSite