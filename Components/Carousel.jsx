import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Title from "./ui/Title";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-screen -top-[88px] relative">
      <div className="h-full w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-[30vh] w-full h-[50vh] overflow-hidden custom-slider-class">
        <Slider {...settings}>
          <div className="w-full h-[45vh] top-[88px] ">
            <div className="w-full h-full container mx-auto text-white">
              <div className="w-[100%] max-w-[500px] absolute flex flex-col justify-start items-start gap-[3rem]">
                <Title addClass="text-5xl">Fast Food Restaurant</Title>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  laborum perspiciatis tempore labore magnam quo eos
                  voluptatibus blanditiis sit, corporis tempora? Voluptates
                  magnam quasi sapiente pariatur, ratione doloremque quam iure!
                </p>
                <button className="btn-primary w-[148px]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[40vh] top-[88px] ">
            <div className="w-full h-full container mx-auto text-white">
              <div className="w-[100%] max-w-[500px] absolute flex flex-col justify-start items-start gap-[3rem]">
                <Title addClass="text-5xl">Fast Food Restaurant</Title>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  laborum perspiciatis tempore labore magnam quo eos
                  voluptatibus blanditiis sit, corporis tempora? Voluptates
                  magnam quasi sapiente pariatur, ratione doloremque quam iure!
                </p>
                <button className="btn-primary w-[148px]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[40vh] top-[88px] ">
            <div className="w-full h-full container mx-auto text-white">
              <div className="w-[100%] max-w-[500px] absolute flex flex-col justify-start items-start gap-[3rem]">
                <Title addClass="text-5xl">Fast Food Restaurant</Title>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  laborum perspiciatis tempore labore magnam quo eos
                  voluptatibus blanditiis sit, corporis tempora? Voluptates
                  magnam quasi sapiente pariatur, ratione doloremque quam iure!
                </p>
                <button className="btn-primary w-[148px]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[40vh] top-[88px] ">
            <div className="w-full h-full container mx-auto text-white">
              <div className="w-[100%] max-w-[500px] absolute flex flex-col justify-start items-start gap-[3rem]">
                <Title addClass="text-5xl">Fast Food Restaurant</Title>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  laborum perspiciatis tempore labore magnam quo eos
                  voluptatibus blanditiis sit, corporis tempora? Voluptates
                  magnam quasi sapiente pariatur, ratione doloremque quam iure!
                </p>
                <button className="btn-primary w-[148px]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
