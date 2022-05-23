import React from "react";
import "./TShirt.css";
const TShirt = (props) => {
  const { handleadd } = props;
  const { name, price, picture } = props.tshirt;
  return (
    <div className="img-size">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={() => handleadd(props.tshirt)}>add to cart</button>
    </div>
  );
};

export default TShirt;
