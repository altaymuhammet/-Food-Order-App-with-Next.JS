import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'
import { FaShoppingCart } from "react-icons/fa";

const CampaignItem = () => {
    return (
        <div className="bg-secondary w-[45%] min-w-[450px] rounded-lg px-6 py-6 flex justify-around items-center" >
            <div className="w-40 h-40 relative overflow-hidden rounded-full border-[5px] border-primary">
                <Image src="/images/o1.jpg" alt="food" layout='fill' objectFit='cover' className="hover:scale-110 transition-all"/>
            </div>
            <div className='text-white flex flex-col justify-between items-start gap-5 '>
                <Title addClass="text-3xl">Tasty Thursdays</Title>
                <h6 className="font-dancing">
                    <span className='text-5xl text-primary'>20%</span> off
                </h6>
                <button className='btn-primary w-full flex justify-center items-center gap-3'>
                    <p>Order now</p>
                    <FaShoppingCart />
                </button>
            </div>
        </div>
    )
}

const Campaigns = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 justify-between items-center container mx-auto py-10 gap-5">
        <CampaignItem />
        <CampaignItem />
    </div>
  )
}

export default Campaigns