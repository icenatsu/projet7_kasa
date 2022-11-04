import React from "react";
import logo from "assets/img/logo_kasa_monochrome.png";

const Footer = () => {
  return (
    <footer>
      <div className="logomono">
        <img src={logo} alt="logo kasa monochrome"></img>
      </div>
      <div className="copiryght">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;
