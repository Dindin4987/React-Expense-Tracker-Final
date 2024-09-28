import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expensesSlice";
import EditForm from "../components/EditForm";

function ExpenseList() {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const [editingExpense, setEditingExpense] = useState(null);

  return (
    
    <div>
      <h3 className="text-lg text-white">Expenses</h3>
      <ul className="text-white">
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
