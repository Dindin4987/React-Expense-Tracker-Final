import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expensesSlice";
import EditForm from "../components/EditForm";
import ExpenseIncomeBtn from "./ExpenseIncomeBtn";
import Header2 from "./Header2";
import Filter from "./Filter";

function ExpenseList() {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const [editingExpense, setEditingExpense] = useState(null);
  const [filter, setFilter] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Filter expenses based on filter input
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.category.toLowerCase().includes(filter.toLowerCase()) ||
      expense.comment.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="text-white">
      <Header2 />
      <div className="container flex  mt-12">
        <div className="basis-1/2 text-white ml-10">
          <h3 className="text-3xl text-white">All Expense</h3>
          <p className="text-xs">
            View and manage every transaction seamlessly! Your entire financial
            landscape, all in one place.
          </p>
        </div>

        <div className="flex-1">
          <ExpenseIncomeBtn />
        </div>
      </div>

      <div className="ml-10 bg-gray-700">
        {/* Render Filter component */}
        <Filter
          filter={filter}
          setFilter={setFilter}
          date={selectedDate}
          setDate={setSelectedDate}
        />
      </div>

      <table className="min-w-full border border-gray-700 text-white ml-10 ">
        <thead className="bg-gray-900">
          <tr className="text-left">
            <th className="py-2 px-4 border-b border-gray-700">Category</th>
            <th className="py-2 px-4 border-b border-gray-700">Comment</th>
            <th className="py-2 px-4 border-b border-gray-700">Date</th>
            <th className="py-2 px-4 border-b border-gray-700">Time</th>
            <th className="py-2 px-4 border-b border-gray-700">Sum</th>
            <th className="py-2 px-4 border-b border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-700">
          {filteredExpenses.map((expense) => (
            <tr key={expense.id}>
              <td className="py-2 px-4 border-b border-gray-700">
                {expense.category}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {expense.comment}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {expense.date}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {expense.time}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                ${expense.amount}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                <button
                  onClick={() => setEditingExpense(expense)}
                  className="border bg-primary rounded-full px-9 py-1 mr-5"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteExpense(expense.id))}
                  className="border bg-gray-700 rounded-full px-9 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
