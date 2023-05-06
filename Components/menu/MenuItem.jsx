import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = () => {
  return (
    <div className="bg-secondary w-[320px] rounded-2xl shadow-xl">
      <Link href="/product">
        <div className="relative py-8 w-full rounded-t-xl flex justify-center items-center bg-gray-100 rounded-bl-[46px] ">
          <Image
            src="/images/pizza.png"
            alt="Card Image"
            width={150}
            height={150}
            objectFit="cover"
            className="hover:scale-110 transition-all"
          />
        </div>
      </Link>
      <div className="text-white px-6 py-5">
        <h3 className="text-lg mb-3">Delicious Pizza</h3>
        <p className="text-md w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          repellendus recusandae itaque.
        </p>
        <div className="w-full flex justify-between items-center mt-5">
          <p>$20</p>
          <button className="btn-primary w-24 h-8 rounded-xl flex justify-center items-center">
            <FaShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
