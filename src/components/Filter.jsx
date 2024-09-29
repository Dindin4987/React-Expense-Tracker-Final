import React, { useState } from "react";

const Filter = ({ filter, setFilter }) => {
   
  const [selectedDate, setSelectedDate] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="container text-white">
      <input className="rounded-full bg-black p-2 m-5"
        type="text"
        name="filter"
        placeholder="Search for anything.."
        value={filter}
        onChange={handleFilterChange}
      />

      <input className="rounded-full  bg-black p-2"
        type="date"
        name="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
};

export default Filter;
