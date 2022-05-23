import React from "react";
import Special from "../Special/Special";

const Myself = ({ house, ring }) => {
  return (
    <div style={{ backgroundColor: "aqua" }}>
      <p>myself</p>
      <p>house: {house}</p>
      <Special ring={ring}></Special>
    </div>
  );
};

export default Myself;
