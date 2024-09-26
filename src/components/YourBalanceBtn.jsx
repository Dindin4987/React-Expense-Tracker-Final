import React from "react";
import { MdArrowOutward } from "react-icons/md";

const YourBalanceBtn = () => {
  return (
    <div className="">
      <div className="bg-secondary p-4 rounded shadow flex">
        <span>
          <MdArrowOutward className="icons bg-primary rounded-lg mt-2 text-3xl" />
        </span>
        <div className="mx-4 ">
          <p className="text-left text-gray-500 text-xs">Your balance</p>
          <h3 className="text-left text-lg font-bold">$632.00</h3>
        </div>
        <div>
          <p className="bg-slate-200 rounded px-3 text-primary text-xs mt-6">
            +1.29%
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourBalanceBtn;
