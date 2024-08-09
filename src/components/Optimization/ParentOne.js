import React, { useState } from "react";
// import ChildOne from "./ChildOne";

function ParentOne({ children }) {
  const [count, setCount] = useState(0);
  console.log("ParentOne Rendering");
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => (c) => c + 1}>Count-{count}</button>

      {/* <ChildOne /> */}
    </div>
  );
}

export default ParentOne;
