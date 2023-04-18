import Image from "next/image";
import React from "react";

const CustomerItem = ({ src }) => {
  return (
    <div className="flex-1 min-w-[384px] flex flex-col gap-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded-md">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          officia quaerat est vitae tempora ut quas ipsum in at ratione enim
          cupiditate eius iure nihil veritatis, voluptas voluptatum debitis cum!
        </p>
        <div className="flex flex-col justify-center items-start mt-5">
          <span className="text-lg text-primary">Moana Michell</span>
          <span>magna alqua</span>
        </div>
      </div>
      <div className="relative w-32 h-32 border-4 border-primary rounded-full before:content-[''] before:absolute before:top-[-24px] before:left-[48px] before:w-0 before:h-0 before:border-[12px] before:border-x-transparent before:border-t-transparent before:border-b-primary">
        <Image
          className="rounded-full"
          src={src}
          alt="Client"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
