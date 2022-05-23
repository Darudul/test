import React from "react";
import Myself from "../Myself/Myself";

const Father = (props) => {
  const { house, ring } = props;
  return (
    <div style={{ color: "red", border: "2px solid red" }}>
      <h2>father</h2>
      <p>House: {house}</p>
      <Myself house={house} ring={ring}></Myself>

    </div>
  );
};

export default Father;
