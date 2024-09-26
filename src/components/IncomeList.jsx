import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteIncome, editIncome } from "../redux/incomeSlice";
import EditForm from "../components/EditForm";

function IncomeList() {
  const income = useSelector((state) => state.income);
  const dispatch = useDispatch();
  const [editingIncome, setEditingIncome] = useState(null);

  return (
    <div>
      <h3 className="text-lg text-white">Income</h3>
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
