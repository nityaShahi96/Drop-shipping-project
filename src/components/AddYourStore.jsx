import React from "react";
import CategoryCard from "./cards/CategoryCard";
import Category from "./cards/Category";

const AddYourStore = () => {
  const categories = [
    <Category />,
    <Category />,
    <Category />,
    <Category />,
    <Category />,
    <Category />,
    <Category />,
    <Category />,
  ];

  return (
    <div>
      <div className=" flex gap-6 ml-[150px] mt-12">
        <CategoryCard />
        <CategoryCard />
      </div>

      <div className="lg:grid lg:grid-cols-4 ml-16 mb-10 ">
        {categories.map((category) => {
          return category;
        })}
      </div>
    </div>
  );
};

export default AddYourStore;
