import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart, removeFromCart } = props;
  let command;
  if (cart.length === 0) {
    command = <p>this is command</p>;
  }
  return (
    <div>
      <h2>this is cart: {cart.length}</h2>
      {cart.length === 0 || <p>add more</p>}
      {cart.length === 5 && <p className="red">trueeeee seee this</p>}
      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          <button onClick={() => removeFromCart(tshirt)}>x</button>
        </p>
      ))}
      {command}

      {cart.length !== 4 ? <p>keep adding</p> : <button>delete all</button>}
    </div>
  );
};

export default Cart;
