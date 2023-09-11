const links = ["link1",'link2','link3']
import Link from 'next/link'
import React from 'react' 

function Header() {
  return (
<nav className='bg-purple-900 h-16 fixed top-0 w-screen  flex justify-between items-center '>
<div>
  <h3 className='text-neutral-50 '>

  about
 
    </h3>
</div>
<div className=" invisible lg:visible lg:flex lg:mr-8 lg:space-x-4 lg:font-semibold lg:text-xl ">
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