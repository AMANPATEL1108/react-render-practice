import React, { useState } from "react";
import { ChildA } from "./ContextChild";
import { MemoizedChildA } from "./ContextChild";

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

export const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log("Context Parent Rendering");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>count-{count}</button>
      <CountProvider value={count}>
        {/* <MemoizedChildA /> */}
        {children}
      </CountProvider>
    </div>
  );
};
