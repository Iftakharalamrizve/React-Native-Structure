import React, { useState } from "react";

const UseStateArray = () => {
  const [items, pushItem] = useState([]);
  const [currentValue, ChangeVlaue] = useState("");
  const addValue = () => {
    if (currentValue != "") {
      pushItem([...items, currentValue]);
    }
    ChangeVlaue("");
  };

  return (
    <>
      <input
        type="text"
        value={currentValue}
        onChange={(e) => ChangeVlaue(e.target.value)}
      />
      <button onClick={addValue}>Add</button>
      <ul>
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default UseStateArray;
