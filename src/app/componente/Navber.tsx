import React from 'react'
import { FaBolt } from "react-icons/fa";
import {FaSearch} from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6';
import { IoFastFood } from 'react-icons/io5';

const Navber = () => {
  return (
    <div>
      <div  className=' grid xl:grid-cols-1 grid-cols-1'>
        <div className='p-5'>
          <div className='py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-600 '>
            <div className='flex justify-between items-center'>
              <div className='flex justify-center items-center gap-2'>
              {/**logo burger */}
              <IoFastFood   className='w-6 h-6 text-red-600 hover:text-cyan-400'/>
  
                {/**search icon */}
                <div style={{position: "relative"}}>
                  <input className='rounded-3xl py-3 px-3 outline-none text-xs w-[350px]
                  pr-10 hidden lg:block md:block' placeholder='Serach for your favourite Fast Food from menu'/>
                 <FaSearch className='w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform  -translate-y-1/2 
                 hidden lg:block md:block'/> 
                </div>
              </div>


            <div className='flex justify-center items-center gap-2'>
              <FaBolt className=' w-5 h-5 text-amber-400 hidden lg:block md:block
              '/>
              <p className='text-sm text-white hidden lg:block md:block'>Order now and get it with 
                <span className='text-amber-400'>15 minutes!</span>
              </p>
            
              {/**card icon */}

              <FaCartShopping className='w-8 h-8 text-red-600 rounded-full ring-2 p-1 relative hover:text-cyan-400' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navber