import React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Link2 = () => {
  return (
    <div className="bg-gray-200 h-36 w-52 mt-10">
      {/* Position the Checkbox in the top-right corner */}
      <div className="">
        <Checkbox {...label} />
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-black h-16 w-16"></div>
        <div className="">Shopify</div>
      </div>
    </div>
  );
};

export default Link2;
