import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"

const Customers = () => {

  const NextBtn = ({onClick}) => <button className="bg-primary text-white p-3 rounded-full text-xl text-center absolute -bottom-16 md:-bottom-24 left-1/2 ms-3 flex justify-center items-center" onClick={onClick}>
    <IoIosArrowForward />
  </button>

  const PrevBtn = ({onClick}) => <button className="bg-primary text-white p-3 rounded-full text-xl text-center absolute -bottom-16 md:-bottom-24 right-1/2 me-3 flex justify-center items-center" onClick={onClick}>
    <IoIosArrowBack />
  </button>

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
      }]
  };
  return (
    <div className="container mx-auto mt-16">
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <Title addClass="text-4xl">What Our Customers Think?</Title>
          <Slider {...settings} className="w-full h-auto">
              <CustomerItem src="/images/client1.jpg" />
              <CustomerItem src="/images/client2.jpg" />
              <CustomerItem src="/images/client1.jpg" />
              <CustomerItem src="/images/client2.jpg" />
          </Slider>
      </div>
    </div>
  );
};

export default Customers;
