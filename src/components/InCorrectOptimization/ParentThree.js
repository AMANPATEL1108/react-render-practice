import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFour } from "./ChildFour";

function ParentThree() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Vishwas");

  console.log("ParentThree Rendering");
  return (
    <div>
      <button onClick={() => (c) => c + 1}>Count-{count}</button>
      <button onClick={() => setName("Codevolution")}>Change Name</button>

      <MemoizedChildFour name={name} />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  );
}

export default ParentThree;
