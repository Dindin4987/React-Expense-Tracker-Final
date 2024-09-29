import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expensesSlice";
import EditForm from "../components/EditForm";
import ExpenseIncomeBtn from "./ExpenseIncomeBtn";
import Header2 from "./Header2";

function ExpenseList() {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const [editingExpense, setEditingExpense] = useState(null);

  return (
    <div className="container">
      <Header2 />
      <div className="container flex  mt-12">
        <div className="basis-1/2 text-white ml-10">
          <h3 className="text-3xl text-white">Expenses</h3>
          <p className="text-xs">
            View and manage every transaction seamlessly! Your entire financial
            landscape, all in one place.
          </p>
        </div>

        <div className="flex-1">
          <ExpenseIncomeBtn />
        </div>
      </div>

      <ul className="text-white container bg-gray-500">
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.category} {expense.comment} {expense.date} {expense.time} $
            {expense.amount}
            <button
              onClick={() => setEditingExpense(expense)}
              className="border bg-primary rounded-lg px-5 py-1"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteExpense(expense.id))}
              className="border bg-gray-700 rounded-lg px-5 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {editingExpense && (
        <EditForm
          type="expense"
          transaction={editingExpense}
          onClose={() => setEditingExpense(null)}
        />
      )}
    </div>
  );
}

export default ExpenseList;
