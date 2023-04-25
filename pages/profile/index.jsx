import Image from "next/image";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { BsLockFill } from "react-icons/bs";
import Account from "@/Components/profile/Account";
import Password from "@/Components/profile/Password";
import Order from "@/Components/profile/Order";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="w-full px-4 py-24 min-h-[550px] gap-y-12 md:p-12 flex flex-col md:flex-row justify-start items-start">
      <div className="w-full md:w-[250px] md:mt-8 shadow-xl shadow-slate-200 rounded-xl text-secondary">
        <div className="flex flex-col justify-center items-center gap-1 py-5">
          <div className="w-[70px] h-[70px] relative rounded-full">
            <Image
              className="rounded-full"
              src="/images/profilepic.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span className="font-semibold text-xl">John Doe</span>
        </div>
        <ul className="w-full">
          <li
            className={`w-full border-t  border-b rounded-lg p-3 ps-5 hover:bg-primary cursor-pointer ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <button className="w-full flex justify-start items-center gap-2">
              <FaHome className="text-xl" />
              <span>Account</span>
            </button>
          </li>
          <li
            className={`w-full border-b rounded-lg p-3 ps-5 hover:bg-primary cursor-pointer ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <button className="w-full flex justify-start items-center gap-2">
              <BsLockFill className="text-xl" />
              <span>Password</span>
            </button>
          </li>
          <li
            className={`w-full border-b rounded-lg p-3 ps-5 hover:bg-primary cursor-pointer ${
              tabs === 2 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(2)}
          >
            <button className="w-full flex justify-start items-center gap-2">
              <GiScooter className="text-xl" />
              <span>Orders</span>
            </button>
          </li>
          <li
            className={`w-full p-3 ps-5 rounded-lg hover:bg-primary cursor-pointer rounded-b-lg ${
              tabs === 3 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(3)}
          >
            <button className="w-full flex justify-start items-center gap-2 rounded-b-lg">
              <FiLogOut className="text-xl" />
              <span>Log out</span>
            </button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account />}
      {tabs === 1 && <Password />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export default Profile;
