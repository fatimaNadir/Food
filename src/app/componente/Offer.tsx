'use client'
import React from 'react'


type Offer = {
  title: string;
  description: string;
}

const SpeacialOffer: React.FC = () => {
  const offers:Offer[]= [
    {
      title: 'Happy Hover',
      description: "Celebrate every moment with our Happy Hour specials—delicious bites and refreshing drinks at unbeatable prices!"
    },
    {
      title: 'Family Meal Deal',
      description: "Bring your loved ones together and enjoy a hearty feast with our Family Meal Deal, crafted to delight every member of the family!"
    },
    {
      title: 'Weekly Brunch',
      description: "Make your weekends special with our delightful weekly brunch experience!"
    },
    {
      title: 'Mid Night Deal',
      description: 'Satisfy your midnight cravings with our irresistible late-night deal'
 
    },
  ];

const handleOfferClick = (description: string) => {
  alert(description);
}

  return (
    <section className='py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-red-700'>Special Offers</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg-grid-col-3 gap-6' >
          {offers.map ((offer, index) => (
            <button key={index}
            onClick={() => handleOfferClick(offer.description)}
            className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300
            transition duration-300 transform hover:scale-105'>
                <h3 className='text-2xl font-semibold text-slate-700'>{offer.title}</h3>
                <p className='text-red-700 mt-3'>{offer.description}</p>


            </button>
          ))}

        </div>

      </div>

    </section>
  )
  
}

export default SpeacialOffer;