import React from "react";
import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary h-auto py-24 md:py-36">
      <div className="container mx-auto h-full flex flex-col md:flex-row justify-center items-center gap-20">
        <div className="relative h-[600px] w-[445px]">
          <Image src="/images/about-img.png" alt="About" layout="fill" />
        </div>
        <div className="md:w-1/2 text-white flex flex-col justify-center items-center md:items-start gap-10">
          <Title addClass="text-[40px] text-primary text-6xl">We Are Feane</Title>
          <p className="text-center md:text-start">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don`t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn`t anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary mt-5">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
