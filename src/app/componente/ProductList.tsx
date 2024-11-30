import Image from 'next/image';
import React from 'react';

// Products array
const products = [
  {
    id: 1,
    title: 'Maxican Food',
    category: 'Food',
    price: '200.00',
    img: '/hh4.jpeg',
    bgColor: 'bg-amber-500',
  },
  {
    id: 2,
    title: 'Italian Pizza',
    category: 'Pizza',
    price: '350.00',
    img: '/piza2.jpeg',
    bgColor: 'bg-red-500',
  },
  {
    id: 3,
    title: 'Classic Burger',
    category: 'Burger',
    price: '150.00',
    img: '/burger1.jpeg',
    bgColor: 'bg-yellow-500',
  },
  {
    id: 4,
    title: 'Fresh Salad',
    category: 'Salad',
    price: '120.00',
    img: '/saled.jpeg',
    bgColor: 'bg-green-500',
  },
  {
    id: 5,
    title: 'French Fries',
    category: 'Snacks',
    price: '100.00',
    img: '/faries.jpeg',
    bgColor: 'bg-orange-500',
  },
  {
    id: 6,
    title: 'Ice Cream',
    category: 'Dessert',
    price: '80.00',
    img: '/icecreame.jpeg',
    bgColor: 'bg-blue-500',
  },
  {
    id: 7,
    title: 'Seafood Platter',
    category: 'Seafood',
    price: '500.00',
    img: '/seefood.jpeg',
    bgColor: 'bg-teal-500',
  },
  {
    id: 8,
    title: 'Chicken Broast',
    category: 'Chicken',
    price: '300.00',
    img: '/chicken.jpeg',
    bgColor: 'bg-pink-500',
  },
  {
    id: 9,
    title: 'Traditional Dishes',
    category: 'Dishes',
    price: '400.00',
    img: '/deshies.jpeg',
    bgColor: 'bg-purple-500',
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`p-4 rounded-lg shadow-md ${product.bgColor}`}
        >
          {/* Product Image */}
          <div className="overflow-hidden rounded-md mb-4">
            <Image
              src={product.img}
              alt={product.title}
              className='w-full h-40 object-cover rounded-md transform transition duration-300 ease-in-out hover:scale-105'>
            </Image>
          </div>
          {/* Product Details */}
          <h2 className="text-lg font-bold text-white">{product.title}</h2>
          <p className="text-white">{product.category}</p>
          <p className="text-white font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
