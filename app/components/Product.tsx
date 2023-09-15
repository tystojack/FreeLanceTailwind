import React from 'react'
type ProductProps = {
    Title: string;
    img: string;
    Description: string;
    Price: number;

}
const Product: React.FunctionComponent<ProductProps> = (props) => {
    const {Title,img,Description,Price} = props;
  return (
    <div>
<div className="bg-amber-500 flex h-32 w-screen m-4">
    <div className='bg-blue-400  w-40 flex justify-center items-center'>

    <img className='rounded-lg' src={img}/>
    </div>
    <div className='flex flex-col justify-center items-center bg-green-500 w-full '>
    <h1 className='text-stone-100 ' >{Title}</h1>

        <h4 className='text-stone-100'>

        {Description}
        </h4>
        <h3 className='text-stone-100'>{Price}</h3>
        <h2 className='text-stone-100'>{Title}</h2>

    </div>

</div>

    </div>
  )
}

export default Product