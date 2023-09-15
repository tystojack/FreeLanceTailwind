import React from 'react'

function page() {
  return (
    <div className=' bg-gradient-to-b from-purple-700 mt-16   w-screen flex items-center flex-col justify-center'>
      <h1 className='text-stone-100 mt-8 text-5xl'>About</h1>
      <div className=' mt-10 w-3/4 max-w-xs h-48 flex justify-center items-center'>

      <img className=' w-full rounded-xl'  src="/portrait.jpg"/>
      </div>
      <div className=' mt-8 max-w-3xl'>
        
      <h3 className='text-stone-100 text-center p-6 '>Hello I am Tyler. This is my Freelance Web development Site.  I am a selft taught Javascript developer that prides myself with keeping up with the newest trends and inovations in the web development space. I am currently using React or Next.js for the front end of my sites. For styling I have recently implemented tailwind CSS. I enjoy using Mongodb for the backend. I enjoy making games, forums, webscrapers, or whatever else comes to my mind.  </h3>
      </div>
    </div>
  )
}

export default page