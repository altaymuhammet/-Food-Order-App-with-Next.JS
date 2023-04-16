import React from 'react'
import Carousel from '@/Components/Carousel';
import Campaigns from '@/Components/Campaigns';
import MenuWrapper from '@/Components/menu/MenuWrapper';
import About from '@/Components/About';
import Reservation from '@/Components/Reservation';

const Home = () => {
  return (
    <div>
        <Carousel />
        <Campaigns />
        <MenuWrapper />
        <About />
        <Reservation />
    </div>
  )
}

export default Home;