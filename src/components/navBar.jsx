import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = ["About", "Project", "Skills", "Contact"];

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {links.map((link) => {
            return (
              <NavLink
                key={link}
                className="nav-item nav-link text-light px-4 py-3"
                to="#"
              >
                {link}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
