// src/components/EditForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editExpense } from "../redux/expensesSlice";
import { editIncome } from "../redux/incomeSlice";

function EditForm({ type, transaction, onClose }) {
  const [category, setCategory] = useState(transaction.category);
  const [amount, setAmount] = useState(transaction.amount);
  const [comment, setComment] = useState(transaction.comment);
  const [date, setDate] = useState(transaction.date);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTransaction = {
      ...transaction,
      category,
      amount: Number(amount),
      comment,
      date,
    };

    if (type === "expense") {
      dispatch(editExpense(updatedTransaction));
    } else {
      dispatch(editIncome(updatedTransaction));
    }

    onClose(); // Close the edit form
  };

  return (
    <div className="bg-gray-700 p-6 rounded-lg w-1/3 modal">
      <form onSubmit={handleSubmit} className="text-black">
        <h3 className="text-2xl mb-7">
          Edit {type === "expense" ? "Expense" : "Income"}
        </h3>

        <div className="mb-4">
          <label className="block text-gray-300">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Sum (UAH)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Comment</label>
          <textarea
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
          />
        </div>

        <div className="mb-4 mr-7">
          <label className="block text-gray-300">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-full w-28 hover:bg-green-600 mr-5"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded-full w-28 hover:bg-green-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
