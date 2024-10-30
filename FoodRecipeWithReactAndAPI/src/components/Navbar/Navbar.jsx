import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../images/food-and-drink-food-edible-healthy-svgrepo-com.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="receipt logo"/>
        <h1>MNrecipes</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact us</Link>
      </div>
    </nav>
  );
};

export default Navbar;