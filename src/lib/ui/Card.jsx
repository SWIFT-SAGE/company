import React from 'react'

function Card({image,CardTitle,CardDescription}) {
  return (
    <div className=' w-full h-full shadow-md  px-4 py-5  rounded-xl'>
        <div className='  w-96  h-80 mx-auto mb-10'>
            <img src={image} alt="Services-Image" className=' w-full h-full rounded-md ' />
        </div>
        <div className=' w-full'>
            <h3 className=' font-bold text-5xl mb-5 text-balance w-full   '>{CardTitle}</h3>
            <p className=' text-3xl mb-4 '>{CardDescription}</p>
        </div>
    </div>
  )
}

export default Card