import React, { useState, useMemo } from "react";
import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFive } from "./ChildFive";

function ParentFour() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Vishwas");

  const person = {
    fname: "Bruce",
    lname: "Wayn",
  };

  const memorizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  console.log("ParentFour Rendering");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count-{count}</button>
      <button onClick={() => setName("Codevolution")}>Change Name</button>

      <MemoizedChildFive name={name} person={memorizedPerson} />
    </div>
  );
}

export default ParentFour;
