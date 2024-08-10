import React, { useContext } from "react";
import { CountContext } from "./ContextParent";
import { MemoizedChildFive } from "../InCorrectOptimization/ChildFive";

export const ChildA = () => {
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  );
};

export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("Child B Render");
  return (
    <>
      <div>Child B</div>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("Child C Render");
  return (
    <>
      <div>Child C count={count}</div>
    </>
  );
};
