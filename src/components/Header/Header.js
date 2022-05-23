import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h2>this is hesder</h2>
      <nav className="orderview">
        <Link to="home">Home</Link>
        <Link to="orderOverview">Orderoverview</Link>
        <Link to="grandpa">Grandpa</Link>
      </nav>
    </div>
  );
};

export default Header;
