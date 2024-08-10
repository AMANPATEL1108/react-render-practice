import React from "react";

export const ChildFour = ({ name }) => {
  const date = new Date();
  console.log("Child Rendering");
  return (
    <div>
      Hello {name}. It is currently {Date.getHours()}:{Date.getMinutes()}:{" "}
      {Date.getSecond()}
    </div>
  );
};
export const MemoizedChildFour = React.memo(ChildFour);
