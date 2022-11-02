import React from "react";
import { Link } from "react-router-dom";
import logo from "../public/logo_kasa.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={`/home`}>
        <img src={logo} alt="Logo de Kasa" />
      </Link>
    </div>
  );
};

export default Logo;
