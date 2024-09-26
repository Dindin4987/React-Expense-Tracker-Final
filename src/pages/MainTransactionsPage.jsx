import React from "react";
import User from "../components/LeftSideUser";
import ExpenseList from "../components/ExpenseList";
import IncomeList from "../components/IncomeList";

const MainTransactions = () => {
  return (
    <div>
      <User />
      <ExpenseList />
      <IncomeList />
    </div>
  );
};

export default MainTransactions;
