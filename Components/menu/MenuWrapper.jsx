import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-5 mt-16 mb-16">
      <div className="border-b-2 border-secondary">
        <Title addClass="text-4xl">Our Menu</Title>
      </div>
      <div className=" w-1/2 min-w-[350px] mx-auto">
        <nav className="mt-10">
          <ul className="flex justify-between items-center gap-6">
            <li className="flex-1">
              <button className="text-white bg-secondary rounded-3xl w-full py-2">
                All
              </button>
            </li>
            <li className="flex-1">
              <button className="rounded-3xl w-full py-2">Burger</button>
            </li>
            <li className="flex-1">
              <button className="rounded-3xl w-full py-2">Pizza</button>
            </li>
            <li className="flex-1">
              <button className="rounded-3xl w-full py-2">Drink</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8 container mx-auto grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
       
    </div>
  );
};

// grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center
// flex flex-col md:flex-row justify-center items-center md:flex-wrap

export default MenuWrapper;
