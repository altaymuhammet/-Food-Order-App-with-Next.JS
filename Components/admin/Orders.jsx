import React from 'react'
import Title from "@/Components/ui/Title";

const Orders = () => {
    return (
      <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
        <Title addClass="text-[40px]">Orders</Title>
        <div className="overflow-x-auto w-full mt-5 text-white ">
          <table className="w-full text-sm text-center min-w-[1000px]">
            <thead className="text-xs uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  PRODUCT ID
                </th>
                <th scope="col" className="py-3 px-6">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
                <th scope="col" className="py-3 px-6">
                  PAYMENT
                </th>
                <th scope="col" className="py-3 px-6">
                  STATUS
                </th>
                <th scope="col" className="py-3 px-6">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary hover:cursor-pointer">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1 ">
                  63107...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">
                  Emin Başbayan
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">
                  $12
                </td>
  
                <td className="py-4 px-6 font-medium whitespace-nowrap">
                  Cash
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">
                  preparing
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">
                  <button className="text-center text-xs md:text-sm px-4 py-2 rounded-md hover:scale-110 transition-all bg-green-500">Next Stage</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default Orders