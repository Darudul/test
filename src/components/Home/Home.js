import React, { useState } from "react";
import useTShirts from "../../hook/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";
const Home = () => {
  const [tshirts, setTshirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleadd = (selectedItem) => {
    const found = cart.find((tshirt) => tshirt.id === selectedItem.id);
    if (!found) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("item already added");
    }
  };
  const removeFromCart = (selectedItem) => {
    const rest = cart.filter((tshirt) => tshirt.id !== selectedItem.id);
    setCart(rest);
  };
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt.id}
            tshirt={tshirt}
            handleadd={handleadd}
          ></TShirt>
        ))}
      </div>
      <div className="overview-container">
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
