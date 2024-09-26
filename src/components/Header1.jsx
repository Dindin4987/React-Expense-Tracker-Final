import React from "react";
import Icon from "../images/Icon.svg";

const Header1 = () => {
  return (
    <>
      <div className="bg-black flex justify-center container">
        <div className="text-secondary flex justify-center align-middle gap-2 font-bold pt-12">
          <img src={Icon} alt="logo" />{" "}
          <span>
            <h3>EXPENSE TRACKER</h3>
          </span>
        </div>
      </div>
      <main></main>
    </>
  );
};

export default Header1;
