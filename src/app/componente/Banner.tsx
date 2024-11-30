import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black
    to-gray-700 font-sans px-6 py-12 mb-7'>
    <div className='absolute inset-0 opacity-20'>
    <Image src='./burger2.jpeg' alt='delicious bugger banner'
    className='w-full h-full object-cover'/>
    </div>
    <div className='relative z-10 container mx-auto flex flex-col justify-center items-center'>
     <h2 className='text-red-700 sm:text-5xl font-bold mb-4'> Discover Our Menu</h2> 
     <p className='text-red-500 text-lg text-center mb-6 max-w-xl'>Shop Now for Exclustive Food Discount</p>
     <button 
     type='button'
     className='bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadcm-lg
      hover:bg-cyan-600 transition duration-300'>
      Exclting Deals Launch at 12pm

      </button> 
    </div>
    </div>
  )
}

export default Banner 