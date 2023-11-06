import React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Category = () => {
  return (
    <div className="bg-gray-200 h-36 flex flex-col w-52 mt-10 rounded-lg shadow-lg">
      {/* Position the Checkbox in the top-right corner */}
      <div className="">
        <Checkbox {...label} />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="bg-black rounded-xl h-16 w-16"></div>
        <div className="">Shopify</div>
      </div>
    </div>
  );
};

export default Category;
