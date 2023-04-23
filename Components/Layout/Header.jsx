import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import Search from "../search/Search";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-[500] ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto h-full flex flex-row justify-between items-center ">
        <div className="z-[999]">
          <Logo />
        </div>
        <nav
          className={`${
            isMenuOpened !== true ? "hidden" : "inline-block"
          } md:inline-block absolute top-0 left-0 md:static w-full h-full md:w-auto md:h-auto flex justify-center items-center bg-none z-[1011]`}
        >
          <div
            className={`${
              isMenuOpened !== true ? "hidden" : "inline-block"
            } md:hidden absolute top-0 left-0 w-full h-full bg-white opacity-[0.98]`}
          ></div>
          <button
            onClick={() => setIsMenuOpened(false)}
            className="absolute top-10 right-10 inline-block md:hidden text-3xl hover:text-red-600"
          >
            <MdCancel />
          </button>
          <ul className="z-50 w-full md:w-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:text-white gap-x-[1rem] ">
            <li className="w-full md:w-auto px-[.35rem] py-[1.25rem] hover:text-primary cursor-pointer transition-all text-center">
              <Link href="/" onClick={() => setIsMenuOpened(false)}>
                Home
              </Link>
            </li>
            <li className="w-full md:w-auto px-[.35rem] py-[1.25rem] hover:text-primary cursor-pointer transition-all text-center">
              <Link href="/menu" onClick={() => setIsMenuOpened(false)}>
                Menu
              </Link>
            </li>
            <li className="w-full md:w-auto px-[.35rem] py-[1.25rem] hover:text-primary cursor-pointer transition-all text-center">
              <Link href="/about" onClick={() => setIsMenuOpened(false)}>
                About
              </Link>
            </li>
            <li className="w-full md:w-auto px-[.35rem] py-[1.25rem] hover:text-primary cursor-pointer transition-all text-center">
              <Link href="/reservation" onClick={() => setIsMenuOpened(false)}>
                Book Table
              </Link>
            </li>
            <li className="w-full md:hidden md:w-auto px-[.35rem] py-[1.25rem] hover:text-primary transition-all text-center">
              <button className="btn-primary cursor-pointer hover:shadow-md">
                Order Online
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row justify-between items-center gap-x-[1.75rem] z-[999]">
          <Link href="/login/Login">
            <button className="text-white hover:text-primary transition-all text-lg cursor-pointer">
              <FaUserAlt />
            </button>
          </Link>
          <Link href="/cart" className="text-white hover:text-primary transition-all text-lg cursor-pointer">
            <FaShoppingCart />
          </Link>
          <button
            className="text-white hover:text-primary transition-all text-lg cursor-pointer"
            onClick={() => setIsSearchModal(true)}
          >
            <FaSearch />
          </button>
          <button className="btn-primary cursor-pointer transition-all hidden md:inline-block">
            Order Online
          </button>
          <button
            onClick={() => setIsMenuOpened(true)}
            className="inline-block md:hidden text-white hover:text-primary transition-all text-lg cursor-pointer"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
