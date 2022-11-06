import React from "react";
import logo from "assets/img/logo_kasa.png";
import { Link } from "react-router-dom";
import styles from "layout/Header/Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="logo kasa" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
