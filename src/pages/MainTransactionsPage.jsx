import React from "react";
import AddTransaction from "../components/AddTransaction";
import Donut from "../components/Donut";
import ExpenseIncomeBtn from "../components/ExpenseIncomeBtn";

const MainTransactions = () => {
  return (
    <div className="text-white container flex">
      <div className="basis-1/2">
        <h1>Expense Log</h1>
        <p>
          Capture and organize every penny spent with ease! A clear view of your
          financial habits at your fingertips.
        </p>
        <ExpenseIncomeBtn />
        <Donut />
      </div>

      <div>
        <AddTransaction />
      </div>
    </div>
  );
};

export default MainTransactions;
