import React, { useState } from "react";

const initialState = {
  fname: "Bruce",
  lname: "Wayne",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);
  const changeName = () => {
    // person.fname = "Clark";
    // person.lname = "Kent";
    // setPerson(person);
    const newPerson = { ...person };
    newPerson.fname = "Clark";
    newPerson.lname = "Kent";
    setPerson(newPerson);
  };
  console.log("Object Use State Rendering");
  return (
    <div>
      <button
        onClick={() => setPerson({ ...person, fname: "Clark", lname: "Kent" })}
      >
        {person.fname} {person.lname}
      </button>
    </div>
  );
};
