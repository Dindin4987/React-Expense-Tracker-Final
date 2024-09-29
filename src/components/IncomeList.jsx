import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteIncome, editIncome } from "../redux/incomeSlice";
import EditForm from "../components/EditForm";
import Header2 from "./Header2";
import ExpenseIncomeBtn from "./ExpenseIncomeBtn";

function IncomeList() {
  const income = useSelector((state) => state.income);
  const dispatch = useDispatch();
  const [editingIncome, setEditingIncome] = useState(null);

  return (
    <div className="container">
      <Header2 />
      <div className="container flex  mt-12">
        <div className="basis-1/2 text-white ml-10">
          <h3 className="text-3xl text-white">All Income</h3>
          <p className="text-xs">
            Track and celebrate every bit of earnings effortlessly! Gain
            insights into your total revenue in a snap.
          </p>
        </div>

        <div className="flex-1">
          <ExpenseIncomeBtn />
        </div>
      </div>

      <ul className="text-white">
        {income.map((inc) => (
          <li key={inc.id}>
            {inc.category} {inc.comment} {inc.date} {inc.time} ${inc.amount}{" "}
            <button
              onClick={() => setEditingIncome(inc)}
              className="border bg-primary rounded-lg px-5 py-1"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteIncome(inc.id))}
              className="border bg-gray-700 rounded-lg px-5 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {editingIncome && (
        <EditForm
          type="income"
          transaction={editingIncome}
          onClose={() => setEditingIncome(null)}
        />
      )}
    </div>
  );
}

export default IncomeList;
