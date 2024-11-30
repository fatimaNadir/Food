import React from 'react'

const Progressor = () => {
  return (
    <div>
      <div className='flex items-start max-w-screen-lg w-full mx-auto mt-10'>


        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-red-600 p-1.5 flex items-center
          justify-center rounded-full'>
              <span className='text-base text-white font-bold'></span>
            </div>

            <div className='w-full h-1 mx-4 rounded.lg bg-red-500'>
            </div>
          </div>

          <div className='mt-2 mr-4'>
            <h1 className='text-base font-bold text-red-500'>Step 1: Choose Your Dish</h1>
            <p className='text-red-400'>Explore our delicious manu and select your favorite meal.</p>
          </div>
        </div>


        
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-red-600 p-1.5 flex items-center
          justify-center rounded-full'>
              <span className='text-base text-white font-bold'></span>
            </div>

            <div className='w-full h-1 mx-4 rounded.lg bg-red-500'>
            </div>
          </div>

          <div className='mt-2 mr-4'>
            <h1 className='text-base font-bold text-red-500'>Step 2: Custamize Your Order</h1>
            <p className='text-red-400'>Taliler your meal to your taste.</p>
          </div>
        </div>


        
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-red-600 p-1.5 flex items-center
          justify-center rounded-full'>
              <span className='text-base text-white-600 font-bold'></span>
            </div>

            <div className='w-full h-1 mx-4 rounded.lg bg-red-500'>
            </div>
          </div>

          <div className='mt-2 mr-4 '>
            <h1 className='text-base font-bold text-red-400'>Step 3: Place Your Order</h1>
            <p className='text-red-400'>Ready to eat  .</p>
          </div>  
        </div>





      </div>
    </div>
  )
}

export default Progressor