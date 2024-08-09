import React, { useState } from "react";

function UseStateOneFile() {
  const [count, setCount] = useState(0);
  console.log("UseState Rendering");
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => (c) => c + 1}>Count-{count}</button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
    </div>
  );
}

export default UseStateOneFile;
