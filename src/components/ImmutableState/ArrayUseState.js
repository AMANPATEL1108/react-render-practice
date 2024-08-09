import React, { useState } from "react";

const initialState = ["Bruce", "Wayne"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initialState);

  const handleClick = () => {
    // persons.push("Clark");
    // persons.push("Kent");
    // setPersons(persons);
    const newPersons = [...persons];
    newPersons.push("Clark");
    newPersons.push("Kent");
    setPersons(newPersons);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person, index) => (
        <div key={index}>{person}</div>
      ))}
    </div>
  );
};
