import React from "react";
import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="w-full">
      <div className="min-w-[400px] w-full flex-1 md:ms-8 flex flex-col gap-5">
        <Title addClass="text-[40px] font-semibold">Orders</Title>
        <table className="bg-slate-700 w-full">
          <thead className="w-full text-white">
            <tr className="w-[100%] flex justify-between text-sm md:text-md">
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                Id
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
              Address
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                Date
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                Total
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="py-3 bg-secondary rounded-lg text-white px-3 md:px-0">
            <tr className="py-5 flex justify-center items-center hover:bg-primary hover:text-secondary cursor-pointer">
              <td className="relative flex-1 flex justify-center items-center gap-3 px-2 md:px-0">
                <span className="text-center text-xs md:text-sm">
                  123123123
                </span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">New York</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">24.04.2023</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">$18</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">Preparing...</span>
              </td>
            </tr>
            <tr className="py-5 flex justify-center items-center hover:bg-primary hover:text-secondary cursor-pointer">
              <td className="relative flex-1 flex justify-center items-center gap-3 px-2 md:px-0">
                <span className="text-center text-xs md:text-sm">
                  123123123
                </span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">New York</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">24.04.2023</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">$18</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">Preparing...</span>
              </td>
            </tr>
            <tr className="py-5 flex justify-center items-center hover:bg-primary hover:text-secondary cursor-pointer">
              <td className="relative flex-1 flex justify-center items-center gap-3 px-2 md:px-0">
                <span className="text-center text-xs md:text-sm">
                  123123123
                </span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">New York</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">24.04.2023</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">$18</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">Preparing...</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
