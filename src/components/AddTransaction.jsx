import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../redux/incomeSlice";
import { addExpense } from "../redux/expensesSlice";

const AddTransaction = () => {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "expense") {
      dispatch(
        addExpense({
          id: Date.now(),
          date,
          time,
          category,
          amount: Number(amount),
          comment,
        })
      );
    } else {
      dispatch(
        addIncome({
          id: Date.now(),
          date,
          time,
          category,
          amount: Number(amount),
          comment,
        })
      );
    }

    setCategory("");
    setAmount("");
    setComment("");
    setDate("");
    setTime("");
  };

  return (
    <div className="bg-gray-700 p-6 rounded-lg w-full">
      <form onSubmit={handleSubmit} className="text-black">
        <div className="mb-4 flex items-center">
          <label className="inline-flex items-center">
            <input
              className="mx-2"
              type="radio"
              name="type"
              value="expense"
              checked={type === "expense"}
              onChange={(e) => setType(e.target.value)}
            />
            Expense
          </label>
          <label>
            <input
              className="mx-2"
              type="radio"
              name="type"
              value="income"
              checked={type === "income"}
              onChange={(e) => setType(e.target.value)}
            />
            Income
          </label>
        </div>

        <div className="flex">
          <div className="mb-4 mr-7">
            <label className="block text-gray-300">Date</label>
            <input
              className="mt-1 p-2 w-full bg-gray-900 text-gray-300 rounded"
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-300">Time</label>
            <input
              className="mt-1 p-2 w-full bg-gray-900 text-gray-300 rounded"
              type="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Category</label>
          <input
            className="mt-1 p-2 w-full bg-gray-900 text-gray-300 rounded"
            type="text"
            name="category"
            placeholder="Different"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Sum (UAH)</label>
          <input
            className="mt-1 p-2 w-full bg-gray-900 text-gray-300 rounded"
            type="number"
            name="amount"
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Comment</label>
          <textarea
            className="mt-1 p-2 w-full bg-gray-900 text-gray-300 rounded"
            row="3"
            type="text"
            name="comment"
            placeholder="Enter the text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

// Inline styles for form
// const formStyles = {
//   display: "flex",
//   flexDirection: "column",
//   backgroundColor: "#1e1e1e",
//   padding: "20px",
//   borderRadius: "10px",
//     width: "566px",
//   height: "600px",
//   color: "#fff",
//   gap: "10px",
// };

// const buttonStyles = {
//   backgroundColor: "#00ff00",
//   color: "#000",
//   border: "none",
//   width: "50px",
//   padding: "5px",
//   cursor: "pointer",
//   borderRadius: "5px",
// };

export default AddTransaction;
