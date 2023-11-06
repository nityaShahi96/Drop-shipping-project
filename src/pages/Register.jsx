import React, { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import ChooseCategories from "../components/ChooseCategories";
import AddYourStore from "../components/AddYourStore";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  let componentToDisplay;
  if (selectedOption === "option1") {
    componentToDisplay = <PersonalInfo />;
  } else if (selectedOption === "option2") {
    componentToDisplay = <ChooseCategories />;
  } else {
    componentToDisplay = <AddYourStore />;
  }

  return (
    <div className="flex">
      <div className="w-[300px] bg-gray-200 h-screen shadow-gray-500 shadow-lg fixed overflow-y-auto">
        <h1 className="text-center font-bold text-4xl pt-14 pb-14">K Goods</h1>
        <div className="flex flex-col mt-[60px] text-xl gap-20 ml-16">
          <div className="flex items-center gap-2 mb-6">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <label>Personal Info</label>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            <label>Choose Categories</label>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input
              type="radio"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            <label>Add Your Store</label>
          </div>
        </div>
      </div>
      <div className="ml-[300px] w-full">{componentToDisplay}</div>
    </div>
  );
};

export default Register;
