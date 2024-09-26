import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";

const ExpenseIncomeBtn = () => {
  return (
    <div>
      <div className="flex gap-10 mb-8 ">
        <div className="p-4 w-64 rounded-xl shadow flex bg-gray-700">
          <span>
            <MdArrowOutward className="icons bg-primary rounded-lg mt-2 text-3xl" />
          </span>
          <div className="mx-2">
            <p className="text-left text-gray-300 text-xs">Total Income</p>
            <h3 className="text-left text-lg font-bold">$632.00</h3>
          </div>
        </div>

        <div className="p-4 w-64 rounded-xl shadow flex bg-gray-700">
          <span>
            <GoArrowDownLeft className="icons bg-primary rounded-lg mt-2 text-3xl" />
          </span>
          <div className="mx-4 ">
            <p className="text-left text-gray-300 text-xs">Total Expense</p>
            <h3 className="text-left text-lg font-bold">$632.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseIncomeBtn;
