import React from "react";
import Rectangle from "../images/Rectangle.png";
import YourBalanceBtn from "./YourBalanceBtn";

const LeftSide = () => {
  return (
    <aside className="relative">
      <div className="w-p h-p ml-28">
        <img
          src={Rectangle}
          alt="couple"
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="absolute -mt-52 ml-12">
        <YourBalanceBtn />
      </div>
    </aside>
  );
};

export default LeftSide;
