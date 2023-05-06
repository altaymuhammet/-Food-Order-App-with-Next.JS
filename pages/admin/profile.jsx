import Image from "next/image";
import React, { useState } from "react";
import { MdFastfood, MdOutlineCategory } from "react-icons/md";
import { GiScooter } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import Orders from "@/Components/admin/Orders";
import Product from "@/Components/admin/Product";
import Category from "@/Components/admin/Category";
import Footer from "@/Components/admin/Footer";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="w-full px-4 py-24 min-h-[550px] gap-y-12 md:p-12 flex flex-col md:flex-row justify-start items-start">
      <div className="w-full md:w-[250px] md:mt-8 shadow-xl shadow-slate-200 rounded-xl text-secondary">
        <div className="flex flex-col justify-center items-center gap-1 py-5">
          <div className="w-[70px] h-[70px] relative rounded-full">
            <Image
              className="rounded-full"
              src="/images/admin.png"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span className="font-semibold text-xl">Admin</span>
        </div>
        <ul className="w-full">
          <li
            className={`w-full border-t  border-b rounded-lg p-3 ps-5 hover:bg-primary cursor-pointer ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <button className="w-full flex justify-start items-center gap-2">
              <MdFastfood className="text-xl" />
              <span>Products</span>
            </button>
          </li>
          <li
            className={`w-full border-b rounded-lg p-3 ps-5 hover:bg-primary cursor-pointer ${
              tabs === 1 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(1)}
          >
            <button className="w-full flex justify-start items-center gap-2">
              <GiScooter className="text-xl" />
              <span>Orders</span>
            </button>
          </li>
          <li
            className={`w-full border-b rounded-lg p-3 ps-5 hover:bg-primary cursor-pointer ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <button className="w-full flex justify-start items-center gap-2">
              <MdOutlineCategory className="text-xl" />
              <span>Categories</span>
            </button>
          </li>
          <li
            className={`w-full border-b rounded-lg p-3 ps-5 hover:bg-primary cursor-pointer ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <button className="w-full flex justify-start items-center gap-2">
              <CiMenuKebab className="text-xl" />
              <span>Footer Settings</span>
            </button>
          </li>
          <li
            className={`w-full p-3 ps-5 rounded-lg hover:bg-primary cursor-pointer rounded-b-lg ${
              tabs === 4 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(4)}
          >
            <button className="w-full flex justify-start items-center gap-2 rounded-b-lg">
              <FiLogOut className="text-xl" />
              <span>Log out</span>
            </button>
          </li>
        </ul>
      </div>  
      {tabs === 0 && <Product />}
      {tabs === 1 && <Orders />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
    </div>
  );
};

export default Profile;
