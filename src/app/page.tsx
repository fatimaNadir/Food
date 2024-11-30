import React from 'react'
import Navber from './componente/Navber'
import Cardsoul from './componente/Carousel'
import Progressor from './componente/Progressor'
import ProductList from './componente/ProductList'
import Banner from './componente/Banner'
import Menuitems from './componente/MenuItems'
import Offer from './componente/Offer'
import Card from './componente/Card'
import Footer from './componente/Footer'
import Reservation from './componente/Reservation'
import Contact from './componente/Contact'

const page = () => {
  return (
    <div className='bg-gradient-to-r from-black to-slate-700 min-h-screen'>
      <Navber/>
      <Cardsoul/>
      <Progressor/>
      <ProductList/>
      <Banner/>
      <Menuitems/>
      <Offer/>
      <Card/>
      <Reservation/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page