import React from "react";
import Link2 from "./cards/Link2";

const ChooseCategories = () => {
  return (
    <div className="ml-32">
      <div className="text-xl">Choose Product Category</div>
      <div>
        What product do you want to sell? You should choose at least 3
        categories
      </div>
      <div className="flex gap-5">
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
        <div>
          <Link2 />
        </div>
      </div>
    </div>
  );
};

export default ChooseCategories;
