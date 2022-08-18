import React from "react";
import logo from "../images/roadlogo.jpg";

function Header() {
  return (
    <ul>
      <li>
        <img src={logo} alt="Main Logo" width="55px" height="55px" />
      </li>
      <li>
        <a href="#home">Feed</a>
      </li>
      <li>
        <a href="#news">Your Next Trip</a>
      </li>
      <li>
        <a href="#contact">Advanced Search</a>
      </li>
      <li>
        <a href="#about">The World Map</a>
      </li>
    </ul>
  );
}

export default Header;
