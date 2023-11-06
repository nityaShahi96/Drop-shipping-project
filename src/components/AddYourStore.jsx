import React from "react";
import Supplier from "./cards/Supplier";
import Retailer from "./cards/Retailer";
import Link from "./cards/Link";

const AddYourStore = () => {
  return (
    <div>
      <div className=" flex gap-6 ml-[150px] mt-[100px]">
        <div>
          <Supplier />
        </div>
        <div>
          <Retailer />
        </div>
      </div>
      <div className="p-10 ml-20">
        <div className="text-2xl mt-12">Link Your Store</div>
        <div>Choose platform you use and fill your link</div>
        <div className="flex gap-6">
          <div>
            <Link />
          </div>
          <div>
            <Link />
          </div>
          <div>
            <Link />
          </div>
          <div>
            <Link />
          </div>
        </div>
        <div className="flex gap-6 justify-center">
          <div>
            <Link />
          </div>
          <div>
            <Link />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddYourStore;
