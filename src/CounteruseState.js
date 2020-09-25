import React, { useState } from "react";

const CounteruseState = () => {
  const [counter, changeCount] = useState(0);

  return (
    <>
      <button onClick={() => changeCount(counter + 1)}>
        Click Me {counter}
      </button>
    </>
  );
};

export default CounteruseState;
