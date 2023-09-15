import React from 'react'
import Product from '../components/Product'

function page() {
  const Data = [
    {img: "/car.png", Title: "The Title", Description: "The Description fjdlafdjfl;a f", Price: 3000},
    {img: "/car.png", Title: "The Title", Description: "The Description fjdklksla;fj alkf jdsjl", Price: 32},
    {img: "/car.png", Title: "The Title", Description: "The Description fdklaf fjdalkf; j", Price: 400}
  ]
  return (
    <div className='bg-red-500 mt-16   w-screen flex justify-center flex-col items-center '>
    <h1 className='text-stone-100 text-5xl'>Product Page</h1>
    <div>
    {Data.map((e) => (
<Product img={e.img} Title={e.Title} Description={e.Description} Price={e.Price}/>
      ))}
    </div>

  </div>
  )
}

export default page