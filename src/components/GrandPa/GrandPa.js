import React, { createContext, useState } from "react";
import Father from "../Father/Father";

// context api
// 1.call create context with deafault value
// 2.set a variable of the context with uppercase
// 3.make sure you export the context to use it in other places
// 4. wrap ur child context using Ringcontext provider
// 5. provide a value
// 6. to consume the context from child component
// 7.use context hook you will pass the context name
export const RingContext = createContext("ring");

const GrandPa = () => {
  const [house, setHouse] = useState(1);
  const ring = "golden ring";
  const myRing = "diamond ring";

  const handleClick = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div>
        <h1>grandpa my:{house}</h1>
        <button onClick={handleClick}>click me</button>
        <Father house={house} ring={ring}></Father>
      </div>
    </RingContext.Provider>
  );
};

export default GrandPa;
