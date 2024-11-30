import Image from 'next/image'
import React from 'react'





const FlouatingImageContentBlock = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 md:pr-10'>
        <h2 className='text-3xl font-bold mb-4 text-red-700 text-center'>Delicious Food</h2>
        <p className='text-red-500'>`Indulge in the flavors of our newly launched and delightful dishes, crafted just for you!`

</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-cyan-500 transiti duration-200'>
          Order Now
        </button>


        <h3 className='text-2xl font-semibold mt-6 mb-2
         text-center text-red-700'>Coming Soon:Our New Deshies Launches</h3>

         <ul className='text-red-500'>
          <li>
            Unique flavors, unforgettable dishes!
          </li>
          <br></br>
          <li>
            Every bite is a memorable experience!
          </li>
          <br></br>
          <li>
            Embark on a new journey of taste today!
          </li>
          <br></br>
          <li>
            Get ready to savor the magic of our newest creations!     
          </li>
          <br></br>
          <li>
            A feast of flavors is just around the corner!
          </li>
          <br></br>
          <li>
            Stay tuned for dishes that will redefine deliciousness!
          </li>
          <br></br>
         </ul>
         </div>

        <div className='md:w-1/2 mt-6 md:mt-0'>
          <Image src='/th (5).jpeg'
          alt='delicious Food'
          className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500
          ease-in-out transform hover:scal-105 mr-7'/>

      </div>


    </section>
  )

}


export default FlouatingImageContentBlock