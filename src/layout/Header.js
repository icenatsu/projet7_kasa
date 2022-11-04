import React from "react";
import logo from "assets/img/logo_kasa.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo kasa" />
      </div>
      <nav>
        <ul>
          <li className="link">
            <Link to="/">Accueil</Link>
          </li>
          <li className="link">
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
