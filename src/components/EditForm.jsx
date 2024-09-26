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
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3>Edit {type === "expense" ? "Expense" : "Income"}</h3>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditForm;