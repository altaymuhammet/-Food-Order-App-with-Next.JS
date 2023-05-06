import Reacti, { useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";

const Category = () => {
  const [categories, setCategories] = useState([
    { name: "Pizzas" },
    { name: "Burgers" },
    { name: "Kebaps" },
  ]);
  const [inputValue, setInputValue] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setCategories((prev) => [{ name: inputValue }, ...prev]);
    setInputValue("")
  };

  const deleteHandler = (c) => {
    setCategories(() => {
      return categories.filter((category) => category.name !== c.name);
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center md:ps-8 gap-6">
      <div className="w-full lg:px-12 flex flex-col justify-center items-start md:items-center gap-6">
        <Title addClass="text-4xl text-start font-semibold w-full">
          Categories
        </Title>
        <form
          onSubmit={onSubmitHandler}
          className="w-full flex flex-col md:flex-row justify-center items-start md:items-center gap-3"
        >
          <Input
            placeholder="Add Category"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button type="sumbit" className="btn-primary w-full sm:w-[150px]">
            Add
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col justify-center items-center lg:px-12 gap-3">
        {categories.length === 0 && <p className="text-lg underline">There is not any Category yet.</p>}
        {categories.length !== 0 &&
          categories.map((c, i) => {
            return (
              <div
                key={i}
                className="w-full flex justify-between items-center px-8 py-4 bg-secondary text-white rounded-lg"
              >
                <span className="text-lg">{c.name}</span>
                <button
                  className="bg-red-600 px-6 py-3 text-center rounded-lg hover:scale-110 transition-all"
                  onClick={() => deleteHandler(c)}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
