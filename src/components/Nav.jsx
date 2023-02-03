import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="menu">
      <ul className="flex jc-space-around">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/quiz">Quiz</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
