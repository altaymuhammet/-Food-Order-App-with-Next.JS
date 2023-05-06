import React from "react";
import Title from "@/Components/ui/Title";
import Image from "next/image";

const Product = () => {
  return (
    <div className="w-full">
      <div className="min-w-[400px] w-full flex-1 md:ms-8 flex flex-col gap-5">
        <Title addClass="text-[40px] font-semibold">Products</Title>
        <table className="bg-slate-700 w-full">
          <thead className="w-full text-white">
            <tr className="w-[100%] flex justify-between text-sm md:text-md">
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                IMAGE
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                ID
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                TITLE
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                PRICE
              </th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="py-3 bg-secondary rounded-lg text-white px-3 md:px-0">
            <tr className="py-5 flex justify-center items-center hover:bg-primary cursor-pointer">
              <td className="relative flex-1 flex justify-center items-center gap-3 px-2 md:px-0">
                <Image
                  src="/images/pizza.png"
                  alt="Food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">345lkj543s</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">
                  Good Pizza
                </span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">$18</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <button className="text-center text-xs md:text-sm px-4 py-2 bg-red-600 rounded-md hover:scale-110 transition-all">
                  Delete
                </button>{" "}
              </td>
            </tr>
            <tr className="py-5 flex justify-center items-center hover:bg-primary cursor-pointer">
              <td className="relative flex-1 flex justify-center items-center gap-3 px-2 md:px-0">
                <Image
                  src="/images/pizza.png"
                  alt="Food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">234kjl234a</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">
                  Good Pizza
                </span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">$18</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <button className="text-center text-xs md:text-sm px-4 py-2 bg-red-600 rounded-md hover:scale-110 transition-all">
                  Delete
                </button>{" "}
              </td>
            </tr>
            <tr className="py-5 flex justify-center items-center hover:bg-primary cursor-pointer">
              <td className="relative flex-1 flex justify-center items-center gap-3 px-2 md:px-0">
                <Image
                  src="/images/pizza.png"
                  alt="Food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">234n2jk23k</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">
                  Good Pizza
                </span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-xs md:text-sm">$18</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <button className="text-center text-xs md:text-sm px-4 py-2 bg-red-600 rounded-md hover:scale-110 transition-all">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
