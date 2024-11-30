import Image from 'next/image';
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const ProductCardGrid = () => {
    const productImages = [
        '/th.jpeg',
        '/th (4).jpeg',
        '/th (3).jpeg',
        '/th (2).jpeg',
        '/th (1).jpeg',
        '/piza3.jpeg',
    ];

    return (
        <div className='relative text-center p-10'>
            <div
                className='absolute inset-0'
                style={{
                    backgroundImage: '/image5.jpeg',
                    backgroundSize: 'cover',
                    backgroundPosition: 'cover',
                    zIndex: 0,
                    opacity: 0.1,
                }}
            />
            <h1 className='font-bold text-4xl mb-4 text-red-600 z-10 relative'>
                Most Requested Items
            </h1>
            <h1 className='text-3xl text-red-600 z-10 relative'>Order Now..</h1>

            <section
                id='projects'
                className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5'
            >
                {/** array of projects */}
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className='w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative'
                    >
                        <a href='#'>
                            <Image
                                src={productImages[index]}
                                alt={`product ${index + 1}`}
                                className='h-80 w-72 object-cover rounded-t-xl'>
                            </Image>
                            <div className='px-4 py-3 w-72'>
                                <span className='text-slate-700 mr-3 uppercase text-xs'>
                                    Category
                                </span>
                                <p className='text-lg font-bold text-red-700 translate block capitalize'>
                                    Food Name {index + 1}
                                </p>
                                <div className='flex items-center'>
                                    <p className='text-lg font-semibold text-black my-3 cursor-auto'>
                                        $140
                                    </p>
                                    <del>
                                        <p className='text-sm text-blue-300 cursor-auto ml-2'>
                                            $199
                                        </p>
                                    </del>
                                    <div className='ml-auto'>
                                        <FaShoppingCart className='w-5 h-5 text-blue-800' />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProductCardGrid;
