import React from 'react'

const Reservation = () => {
  return (
    <section className='bg-gradient-to-r from-black to gb-slate-900 py-10'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl font-semibold mb-6 text-red-700'>Make A Resvation</h2>
            <form className='max-w-md mx-auto'>
                <div className='mb-4 text-white'>
                    <input
                    type='text'
                    placeholder='Your Name'
                    className='w-full p-3 border border-gray-300 rounded-md'
                    required/>
                </div>

                <div className='md-4 text-white'>
                <input
                    type='email'
                    placeholder='Your Email'
                    className='w-full p-3 border border-gray-300 rounded-md'
                    required/>
                </div>

                <div className='md-4 text-white'>
                <input
                    type='date'
                    className='w-full p-3 border border-gray-300 rounded-md'
                    required/>
                </div>

                <div className='md-4 text-white'>
                <input
                    type='time'
                    className='w-full p-3 border border-gray-300 rounded-md'
                    required/>
                </div>

                <div className='mb-4'>
                    <button className='bg-blue-600 text-white py-2 px-4 rounded-md 
                    hover:bg-cyan-600'>
                        Reserved Table
                    </button>
                </div>

            </form>

        </div>
    </section>
  )
}

export default Reservation
