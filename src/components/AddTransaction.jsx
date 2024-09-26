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
    <div>
      <form onSubmit={handleSubmit} style={formStyles} className="text-black">
        <div>
          <label>
            <input
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
              type="radio"
              name="type"
              value="income"
              checked={type === "income"}
              onChange={(e) => setType(e.target.value)}
            />
            Income
          </label>
        </div>

        <div>
          <label>Date</label>
          <input
            className="text-black"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>Time</label>
          <input
            className="text-black"
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <label>Category</label>
          <input
            className="text-black"
            type="text"
            name="category"
            placeholder="Different"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label>Sum</label>
          <input
            className="text-black"
            type="number"
            name="amount"
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Comment</label>
          <input
            className="text-black"
            type="text"
            name="comment"
            placeholder="Enter the text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <button type="submit" style={buttonStyles}>
          Add
        </button>
      </form>
    </div>
  );
};

// Inline styles for form
const formStyles = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#1e1e1e",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  color: "#fff",
  gap: "10px",
};

const buttonStyles = {
  backgroundColor: "#00ff00",
  color: "#000",
  border: "none",
  width: "50px",
  padding: "5px",
  cursor: "pointer",
  borderRadius: "5px",
};

export default AddTransaction;