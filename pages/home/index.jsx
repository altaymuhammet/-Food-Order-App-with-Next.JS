import React from 'react'
import Carousel from '@/Components/Carousel';
import Campaigns from '@/Components/Campaigns';
import MenuWrapper from '@/Components/menu/MenuWrapper';
import About from '@/Components/About';
import Reservation from '@/Components/Reservation';
import Customers from '@/Components/Customers/Customers';

const Home = () => {
  return (
    <>
        <Carousel />
        <Campaigns />
        <MenuWrapper />
        <About />
        <Reservation />
        <Customers />
    </>
  )
}

export default Home;