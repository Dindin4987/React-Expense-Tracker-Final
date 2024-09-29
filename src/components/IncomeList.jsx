import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteIncome } from "../redux/incomeSlice";
import EditForm from "../components/EditForm";
import ExpenseIncomeBtn from "./ExpenseIncomeBtn";
import Header2 from "./Header2";
import Filter from "./Filter";

function IncomeList() {
  const income = useSelector((state) => state.income);
  const dispatch = useDispatch();
  const [editingIncome, setEditingIncome] = useState(null);
  const [filter, setFilter] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Filter income based on filter input
  const filteredIncome = income.filter(
    (income) =>
      income.category.toLowerCase().includes(filter.toLowerCase()) ||
      income.comment.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="text-white">
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
          {filteredIncome.map((income) => (
            <tr key={income.id}>
              <td className="py-2 px-4 border-b border-gray-700">
                {income.category}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {income.comment}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {income.date}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {income.time}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                ${income.amount}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                <button
                  onClick={() => setEditingIncome(income)}
                  className="border bg-primary rounded-full px-9 py-1 mr-5"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteIncome(income.id))}
                  className="border bg-gray-700 rounded-full px-9 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
