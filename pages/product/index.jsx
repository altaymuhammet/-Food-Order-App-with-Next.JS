import Title from "@/Components/ui/Title";
import Layout from "@/Layout/Layout";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
      <div className="mx-auto flex flex-col lg:flex-row justify-center items-center w-full md:h-screen px-10 py-20 md:py-10 lg:px-32 gap-x-10 xl:gap-x-20 gap-y-6 md:gap-y-0 bg-violet-200">
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/images/pizza.png"
              alt="Pizza"
              layout="fill"
              objectFit="contain"
              className="shadow-2xl rounded-full"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-5  xl:pe-20">
          <Title addClass="text-6xl font-semibold text-left w-full">
            Good Pizza
          </Title>
          <span className="underline underline-offset-4 text-2xl italic text-left w-full">
            $10
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            ipsam nobis eligendi iusto dignissimos ad? Porro corrupti minima
            enim cumque vitae? Soluta dicta, molestias obcaecati fugit assumenda
            nobis non mollitia.
          </span>
          <div className="flex flex-col justify-center items-start h-[200px] mt-0 md:mt-10 w-full">
            <h2 className="underline underline-offset-4  text-2xl font-semibold">
              Choose the size
            </h2>
            <div className="flex justify-start items-center w-full h-full px-2 md:px-0 gap-x-12 md:gap-x-20">
              <div className="relative w-16 h-16 hover:cursor-pointer hover:scale-125 transition-all">
                <Image src="/images/size.png" alt="Pizza" layout="fill" />
                <p className="bg-secondary px-2 rounded-full text-primary absolute top-0 -right-5">
                  Small
                </p>
              </div>
              <div className="relative w-20 h-20 hover:cursor-pointer hover:scale-125 transition-all">
                <Image src="/images/size.png" alt="Pizza" layout="fill" />
                <p className="bg-secondary px-2 rounded-full text-primary absolute top-0 -right-5">
                  Medium
                </p>
              </div>
              <div className="relative w-24 h-24 hover:cursor-pointer hover:scale-125 transition-all">
                <Image src="/images/size.png" alt="Pizza" layout="fill" />
                <p className="bg-secondary px-4 rounded-full text-primary absolute top-0 -right-5">
                  Large
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center md:items-start gap-8">
            <div className="w-full flex justify-start items-center gap-x-10">
              <label className="flex justify-center items-center gap-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-secondary cursor-pointer"
                />
                <span className="text-md">Mayonnaise</span>
              </label>
              <label className="flex justify-center items-center gap-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-secondary cursor-pointer"
                />
                <span className="text-md">Hot sauce</span>
              </label>
              <label className="flex justify-center items-center gap-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-secondary cursor-pointer"
                />
                <span className="text-md">Ketchup</span>
              </label>
            </div>
            <button className="btn-secondary w-2/3 md:w-[200px]">
              Add to cart
            </button>
          </div>
        </div>
      </div>
  );
};

export default index;
