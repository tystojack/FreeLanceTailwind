const links = ["link1",'link2','link3']
import Link from 'next/link'
import React from 'react' 

function Header() {
  return (
<nav className='bg-purple-900 h-16 fixed top-0 w-screen  flex justify-between items-center z-50 '>
<div className='h-3/4 w-48 '>
  {/* <h3 className='text-neutral-50 '>

   Code Clap
 
    </h3> */}
    <img className='object-contain max-h-full ml-4' src="C.png"/>
    

</div>
<div >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='fill-current text-stone-50 h-10 w-10 md:hidden'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

</div>
<div className=" hidden md:visible md:block  invisible lg:visible lg:flex lg:mr-8 lg:space-x-4 lg:font-semibold lg:text-xl ">
  <h3 className='text-neutral-50'>
   <Link href="/About">
   about
   </Link>
    </h3>
  <h3 className='text-neutral-50'>hi</h3>
  <h3 className='text-neutral-50'>hi</h3> 
</div>
</nav>
  )
}

export default Header