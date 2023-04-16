import Image from "next/image";
import React from "react";
import { MdCancel } from "react-icons/md";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";

const Search = (props) => {
  return (
    <div className="absolute top-0 left-0 z-[1011]">
      <div className="w-screen h-screen absolute top-0 left-0 z-[1011] bg-secondary opacity-60"></div>
      <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
        <OutsideClickHandler
          onOutsideClick={() => props.setIsSearchModal(false)}
        >
          <div className="w-[90vw] max-w-[600px] h-[80vh] max-h-[600px] overflow-auto relative px-5 md:px-10 py-[3rem] bg-white gap-8 flex flex-col justify-start items-center z-[1011] rounded-3xl shadow-lg">
            <MdCancel className="absolute right-5 top-5 text-secondary text-3xl font-bold z-[1011] cursor-pointer transition-all hover:text-red-600"  onClick={() => props.setIsSearchModal(false)}/> 
            <Title
              addClass="text-secondary text-center text-5xl"
              style={{ textShadow: "1px 1px 5px #aba8a8" }}
            >
              Search
            </Title>
            <input
              type="text"
              placeholder="Search"
              className="w-full px-5 h-auto py-3 border-2 border-primary rounded-3xl"
            />
            <div className="w-full">
              <ul className="w-full gap-6 flex flex-col">
                <li className="w-full rounded-3xl transition-all border-[1px] flex justify-between items-center px-8 py-4 hover:bg-primary cursor-pointer">
                  <div className="relative w-12">
                    <Image
                      src="/images/pizza.png"
                      alt="pizza"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h2 className="text-xl">Delicious Pizza</h2>
                  <h2 className="text-xl font-bold">$10</h2>
                </li>
                <li className="w-full rounded-3xl transition-all border-[1px] flex justify-between items-center px-8 py-4 hover:bg-primary cursor-pointer">
                  <div className="relative w-12">
                    <Image
                      src="/images/pizza.png"
                      alt="pizza"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h2 className="text-xl">Delicious Pizza</h2>
                  <h2 className="text-xl font-bold">$10</h2>
                </li>
                <li className="w-full rounded-3xl transition-all border-[1px] flex justify-between items-center px-8 py-4 hover:bg-primary cursor-pointer">
                  <div className="relative w-12">
                    <Image
                      src="/images/pizza.png"
                      alt="pizza"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h2 className="text-xl">Delicious Pizza</h2>
                  <h2 className="text-xl font-bold">$10</h2>
                </li>
              </ul>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Search;
