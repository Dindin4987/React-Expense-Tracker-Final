import React from "react";
import Icon from "../images/Icon.svg";
import ImageUser from "../images/ImageUser.jpg";

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
        <button className="text-secondary border rounded-full px-12 py-1 text-sm mr-2">
          All Expense
        </button>
        <button className="text-secondary border rounded-full px-12 py-1 text-sm">
          All Income
        </button>
      </div>

      <div className="flex rounded-full border px-12 py-1 mr-4">
        <img
          src={ImageUser}
          alt="user"
          className="h-6 w-6 rounded-full bg-black mr-2"
        />
        <div>
          <p>Geraldine Mailla</p>
        </div>
      </div>
    </div>
  );
};

export default Header2;
