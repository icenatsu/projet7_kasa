import React from "react";
import logo from "assets/img/logo_kasa_monochrome.png";
import styles from "layout/Footer/Footer.module.scss";

// Composant Footer possédant le logo et copyright
/**************************************************/
const Footer = () => {
  return (
    <footer>
      <div className={styles.logo}>
        <img src={logo} alt="logo kasa monochrome"></img>
      </div>
      <p className={styles.copyright}>
        <small>© 2020 Kasa. All rights reserved</small>
      </p>
    </footer>
  );
};

export default Footer;
