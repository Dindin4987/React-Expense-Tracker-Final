import React from "react";
import AddTransaction from "../components/AddTransaction";
import Donut from "../components/Donut";
import ExpenseIncomeBtn from "../components/ExpenseIncomeBtn";
import ExpenseList from "../components/ExpenseList";
import IncomeList from "../components/IncomeList";
import Header2 from "../components/Header2";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MainTransactions = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Expense Tracker</title>
      </Helmet>
      <Header2 />
      <div className="text-white container flex mt-10">
        <div className="basis-1/2 mx-20">
          <h1 className="text-3xl">Expense Log</h1>
          <p className="text-xs mb-12">
            Capture and organize every penny spent with ease! A clear view of
            your financial habits at your fingertips.
          </p>
          <ExpenseIncomeBtn />
          <Donut />
        </div>

        <div className="flex-1">
          <AddTransaction />
        </div>
      </div>
      <ExpenseList />
      <IncomeList />
    </HelmetProvider>
  );
};

export default MainTransactions;
