import React from "react";
import Image from "next/image";
import Link from "next/link";

const Order = () => {
  return (
    <div className="min-h-[calc(100vh_-_400px)] flex flex-col justify-center items-center gap-5">
      <div className="flex justify-between items-center w-full h-full lg:px-12">
        <table className="bg-slate-700 w-full">
          <thead className="w-full text-white">
            <tr className="w-[100%] flex justify-between text-sm md:text-md">
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                Order Id
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                Customer
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                Address
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="py-10 bg-secondary rounded-lg text-white hover:bg-primary hover:text-secondary cursor-pointer">
            <tr className="py-10 flex justify-center items-center">
              <td className="relative flex-1 flex justify-center items-center gap-3 px-2 md:px-0">
                <span className="text-center text-sm md:text-lg">
                  123123123
                </span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-sm md:text-lg">John Doe</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-sm md:text-lg">Toronto</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-sm md:text-lg">$18</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full lg:px-12">
        <div className="bg-violet-200 flex justify-between items-center py-8">
          <div className="relative flex-1 flex flex-col justify-center items-center gap-1 animate-pulse">
            <Image src="/images/paid.png" alt="" width={40} height={40} objectFit="contain" />
              <span>Payment</span>
          </div>
          <div className="relative flex-1 flex flex-col justify-center items-center gap-1">
            <Image src="/images/bake.png" alt="" width={40} height={40} objectFit="contain" />
          <span>Preparing</span>
          </div>
          <div className="relative flex-1 flex flex-col justify-center items-center gap-1">
            <Image src="/images/bike.png" alt="" width={40} height={40} objectFit="contain" />
          <span>On the way</span>
          </div>
          <div className="relative flex-1 flex flex-col justify-center items-center gap-1">
            <Image src="/images/delivered.png" alt="" width={40} height={40} objectFit="contain" />
          <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
