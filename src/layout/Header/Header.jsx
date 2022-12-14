import React from "react";
import logo from "assets/img/logo_kasa.png";
import { NavLink } from "react-router-dom";
import styles from "layout/Header/Header.module.scss";

// Composant Header possédant le logo et les liens de navigations
/****************************************************************/
const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="logo kasa" />
      </div>
      <nav>
        <ul className={styles.list}>
          <li className={styles["list__item"]}>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className={styles["list__item"]}>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
