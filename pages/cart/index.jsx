import React from "react";
import Image from "next/image";
import Title from "@/Components/ui/Title";

const index = () => {
  return (
    <div className="min-h-[calc(100vh_-_400px)] flex flex-col lg:flex-row justify-center items-center">
      <div className="flex justify-between items-center w-full flex-1 h-full lg:p-4 xl:px-12 min-h-[calc(100vh_-_400px)]">
        <table className="bg-slate-700 w-full">
          <thead className="w-full text-white">
            <tr className="w-[100%] flex justify-between">
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">Product</th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">Extras</th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">Price</th>
              <th className="flex-1 text-center px-1 py-3 uppercase tracking-widest">Quantity</th>
            </tr>
          </thead>
          <tbody className="py-10 bg-secondary rounded-lg text-white hover:bg-primary hover:text-secondary cursor-pointer">
            <tr className="py-10 flex justify-center items-center">
              <td className="relative flex-1 flex justify-center items-center gap-3 px-2 md:px-0">
                <Image
                  src="/images/pizza.png"
                  alt="Product"
                  width={40}
                  height={40}
                />
                <span className="text-center text-sm md:text-lg">Good Pizza</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-sm md:text-lg">mayonnaise, hot sauce, ketchup</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-sm md:text-lg">$20</span>
              </td>
              <td className="flex-1 flex justify-center items-center">
                <span className="text-center text-sm md:text-lg">1</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-center items-center gap-16 px-10 h-full w-full lg:max-w-[300px] lg:min-w-[200px]  bg-slate-700 text-white min-h-[calc(100vh_-_400px)]">
        <Title addClass="text-4xl text-primary underline">CART TOTAL</Title>
        <div className="flex flex-col justify-center items-start gap-5 w-full">
          <div className="w-full text-lg flex justify-between">
            <span className="underline">Subtotal:</span>
            <span>$20</span>
          </div>
          <div className="w-full text-lg flex justify-between">
            <span className="underline">Discount:</span>
            <span>$20</span>
          </div>
          <div className="w-full text-lg flex justify-between">
            <span className="underline">Total:</span>
            <span>$20</span>
          </div>
        </div>
        <button className="btn-primary"> Checkout Now</button>
      </div>
    </div>
  );
};

export default index;
