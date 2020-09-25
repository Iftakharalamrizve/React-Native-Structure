import React, { useState } from "react";

const CounterPrevState = () => {
  const [counter, changeCount] = useState(0);

  const CounterOperation = () => {
    for (var i = 0; i < 5; i++) {
      changeCount((prevCounter) => prevCounter + 1);
    }
  };

  return (
    <>
      <button onClick={CounterOperation}>Click Me {counter}</button>
    </>
  );
};

export default CounterPrevState;
