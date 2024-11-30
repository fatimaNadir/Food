import Image from 'next/image'
import React from 'react'

const Cardsoul = () => {
  return (
    <div>
      <section className='bg-gradient-to-r from-black to-gray-700'>
        <div className='py-4 px-2 mx-suto max-w-screen-xl sm:py-4 lg:px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
        <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gredient-to-r from-blank
         to-gray-700 h-auto md:h-full flex flex-col'>
          <a href=''
          className='group relative flex flex-col overflow-hidden rounded-lg shadow-current
          px-4 pb-4 pt-40 flex-grow'>
            <Image src='/image2.jpeg'
            alt='burger 1'
            className='absolute inset-0 h-full w-full object-cover group:hover:scale-105
            transform duration-500 ease-in-out'
            />
            <div className='absolute inset-0 bg-b from-gray-900/25 to-gray-900/5'>
            </div>
            <h3 className='z-10 text-2xl font-medium text-white absolute top-0
            left-0 p-4 xs:text-xl md:text-0xl'>Classic Bites</h3>
          </a>
        </div>

        <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gredient-to-r from-blank
         to-gray-700 h-auto md:h-full flex flex-col'>
          <a href=''
          className='group relative flex flex-col overflow-hidden rounded-lg shadow-current
          px-4 pb-4 pt-40  mb-4flex-grow '>
            <Image src='/burger4.jpeg'
            alt='burger3'
            className='absolute inset-0 h-full w-full object-cover group:hover:scale-105
            transform duration-500 ease-in-out'/>
            <div className='absolute inset-0 bg-b from-gray-900/25 to-gray-900/5'>
            </div>
            <h3 className='z-10 text-2xl font-medium text-white absolute top-0
            left-0 p-4 xs:text-xl md:text-0xl'>Spicy Masala</h3>
          </a>
        
          <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
          <a href=''
          className='group relative flex flex-col overflow-hidden rounded-lg px-4 gb-4pt-40 '>
            <Image src='/image1.jpeg'
            alt='burger3'
            className='absolute inset-0 h-full w-full object-cover group:hover:scale-105
            transform duration-500 ease-in-out'/>
            <div className='absolute inset-0 bg-b from-gray-900/25 to-gray-900/5'>
            </div>
            <h3 className='z-10 text-2xl font-medium text-white absolute top-0
            left-0 p-4 xs:text-xl md:text-0xl'>Veggie</h3>
          </a>
          <a href=''
          className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
            <Image src='/food.jpeg'
            alt='burger4'
            className='absolute inset-0 h-full w-full object-cover group:hover:scale-105
            transform duration-500 ease-in-out'/>
            <div className='absolute inset-0 bg-b from-gray-900/25 to-gray-900/5'>
            </div>
            <h3 className='z-10 text-2xl font-medium text-white absolute top-0
            left-0 p-4 xs:text-xl md:text-0xl'>Gourment Grills</h3>

          </a>
          </div>  
        </div>

      <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700
      h-auto md:h-full flex flex-col'>
        <a href=''
                  className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                  <Image src='/piza.jpeg'
                  alt='burger4'
                  className='absolute inset-0 h-full w-full object-cover group:hover:scale-105
                  transform duration-500 ease-in-out '/>
                  <div className='absolute inset-0 bg-b from-gray-900/25 to-gray-900/5'>
                  </div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0
                  left-0 p-4 xs:text-xl md:text-0xl'>Chesy Delights</h3>
        </a>

        <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700
               h-auto md:h-full flex flex-col'>
               <a href=''
                  className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                  <Image src='/burger2.jpeg'
                  alt='burger4'
                  className='absolute inset-0 h-full w-full object-cover group:hover:scale-105
                  transform duration-500 ease-in-out'/>
                  <div className='absolute inset-0 bg-b from-gray-900/25 to-gray-900/5'>
                  </div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0
                  left-0 p-4 xs:text-xl md:text-0xl'>Spicy</h3>
        </a>
      </div>
      </div>
      

      
      
        




        </div>
        </div>
      </section>
    </div>
  )
}

export default Cardsoul