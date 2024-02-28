import { useState } from "react";

export const Count = () => {
  const { count, increment, decrement, reset } = useCount();
  return (
    <div>
      <h3>Count 1</h3>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}> - </button>
    </div>
  );
};
