import React, { useState } from "react";
import ChildTwo from "./ChildTwo";
// import ChildOne from "./ChildOne";
import { MemoizedChildTwo } from "./ChildTwo";

function ParentTwo() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Vishwas");

  console.log("ParentTwo Rendering");
  return (
    <div>
      <button onClick={() => (c) => c + 1}>Count-{count}</button>
      <button onClick={() => setName("Codevolution")}>Change Name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
}

export default ParentTwo;
