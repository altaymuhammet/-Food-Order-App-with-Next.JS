import Title from "@/Components/ui/Title";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { addProduct } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const extraItems = [
  {
    id: 1,
    name: "Ketchup",
    price: 2,
  },
  {
    id: 2,
    name: "Mayonnaise",
    price: 2,
  },
  {
    id: 3,
    name: "Hot sauce",
    price: 2,
  },
];

const sizes = [
  {
    name: "Small",
    price: 10,
  },
  {
    name: "Medium",
    price: 20,
  },
  {
    name: "Large",
    price: 30,
  },
];

const foodItems = [
  {
    id: 1,
    name: "Pizza 1",
    price: 10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit corporis ex laboriosam tenetur at ad aspernatur",
    extraOptions: [
      {
        id: 1,
        name: "Extra 1",
        price: 1,
      },
    ],
  },
];

const Index = () => {
  const [extraPrice, setExtraPrice] = useState(0);
  const [sizePrice, setSizePrice] = useState(sizes[0].price);
  const [sizeCheck, setSizeCheck] = useState("Small");
  const [extras, setExtras] = useState([]);

  const dispatch = useDispatch();

  const totalPrice = extraPrice + sizePrice;

  const handleSizeClick = (size) => {
    setSizeCheck(size.name);
    setSizePrice(size.price);
  };

  const handleCheckChange = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      setExtraPrice(extraPrice + item.price);
      setExtras([...extras, item]);
    }
    if (!checked) {
      setExtraPrice(extraPrice - item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  const addItemHandler = () => {
    dispatch(addProduct({ ...foodItems[0], extras, totalPrice, quantity: 1 }));
  };

  return (
    <div className="mx-auto h-auto flex flex-col lg:flex-row justify-center items-center w-full px-5 md:px-10 py-20 lg:px-32 gap-x-10 xl:gap-x-20 gap-y-6 md:gap-y-0 bg-violet-200">
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
          <Image
            src="/images/pizza.png"
            alt="Pizza"
            layout="fill"
            objectFit="contain"
            className="shadow-2xl rounded-full"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-5  xl:pe-20">
        <Title addClass="text-6xl font-semibold text-left w-full">
          Good Pizza
        </Title>
        <span className="underline underline-offset-4 text-2xl italic text-left w-full">
          ${totalPrice}
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          ipsam nobis eligendi iusto dignissimos ad? Porro corrupti minima enim
          cumque vitae? Soluta dicta, molestias obcaecati fugit assumenda nobis
          non mollitia.
        </span>
        <div className="flex flex-col justify-center items-start h-[200px] mt-0 md:mt-10 w-full">
          <h2 className="underline underline-offset-4  text-2xl font-semibold">
            Choose the size
          </h2>
          <div className="flex justify-start items-center w-full h-full px-2 md:px-0 gap-x-12 md:gap-x-20">
            {sizes.map((size, index) => (
              <div
                onClick={() => handleSizeClick(size)}
                key={index}
                className={`relative ${
                  size.name === "Small"
                    ? "w-16 h-16"
                    : size.name === "Medium"
                    ? "w-20 h-20"
                    : "w-24 h-24"
                } hover:cursor-pointer hover:scale-125 transition-all`}
              >
                <Image src="/images/size.png" alt="Pizza" layout="fill" />
                <p className="bg-secondary px-2 rounded-full text-primary absolute top-0 -right-5">
                  {size.name}
                  {size.name === sizeCheck && (
                    <AiFillCheckCircle className="absolute -top-2 -right-4 rounded-full text-secondary text-xl" />
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-8">
          <div className="w-full flex justify-start items-center gap-x-5 md:gap-x-10">
            {extraItems.map((item) => (
              <label
                key={item.id}
                className="flex justify-center items-center gap-x-2 cursor-pointer"
              >
                <input
                  onChange={(e) => handleCheckChange(e, item)}
                  type="checkbox"
                  className="w-5 h-5 accent-secondary cursor-pointer"
                />
                <span className="text-md">{item.name}</span>
              </label>
            ))}
          </div>
          <button
            className="btn-secondary w-2/3 md:w-[200px]"
            onClick={addItemHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
