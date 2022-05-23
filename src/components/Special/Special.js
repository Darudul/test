import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";
const Special = ({ ring }) => {
  const [house, setHouse] = useContext(RingContext);
  const clickFunction = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };
  return (
    <div style={{ backgroundColor: "yellowgreen" }}>
      <h1>{ring}</h1>
      <button onClick={clickFunction}>click magic</button> <br />
      <button onClick={() => setHouse(house + 1)}>magic</button>
    </div>
  );
};

export default Special;
