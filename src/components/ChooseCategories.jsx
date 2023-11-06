import React from "react";
import CategoryCard from "./cards/CategoryCard";
import Category from "./cards/Category";

const ChooseCategories = () => {
  const categories = [
    <Category />,
    <Category />,
    <Category />,
    <Category />,
    <Category />,
    <Category />,
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
      <div className="ml-16 mt-8">
        <div className="text-xl">Choose Product Category</div>
        <div>
          What product do you want to sell? You should choose at least 3
          categories
        </div>
      </div>

      <div className="grid grid-cols-4 ml-16 mb-10">
        {categories.map((category) => {
          return category;
        })}
      </div>
    </div>
  );
};

export default ChooseCategories;
