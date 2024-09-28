import React from "react";
import Icon from "../images/Icon.svg";
import UserDropDown from "./UserDropDown";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <div className="container w-full flex justify-between bg-black text-secondary mt-10">
      <div className="text-secondary flex  gap-1 font-bold">
        <img src={Icon} alt="logo" className="h-6 w-6 ml-12" />{" "}
        <span>
          <h4>EXPENSE TRACKER</h4>
        </span>
      </div>

      <div>
        <Link
          to="/expenselist"
          type="Link"
          className="text-secondary border rounded-full px-12 py-1 text-sm mr-2">
          All Expense
        </Link>

        <Link
        to="/incomelist"
        type="Link"
        className="text-secondary border rounded-full px-12 py-1 text-sm">
          All Income
        </Link>
      </div>

      
      <div>
        <UserDropDown />
      </div>
    </div>
  );
};

export default Header2;
