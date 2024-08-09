import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";

function ParentThree() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Vishwas");

  console.log("ParentThree Rendering");
  return (
    <div>
      <button onClick={() => (c) => c + 1}>Count-{count}</button>
      <button onClick={() => setName("Codevolution")}>Change Name</button>
      <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree>
    </div>
  );
}

export default ParentThree;
