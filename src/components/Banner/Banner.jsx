import React from "react";
import styles from "components/Banner/Banner.module.scss";

// Gestion de la bannière au niveay de son titre, la source et le texte alternatif de l'image
/*********************************************************************************************/
const Banner = ({ title, srcImg, altTexte }) => {
  return (
    <div className={styles.banner}>
      {title ? <h1 className={styles["banner__title"]}>{title}</h1> : ""}
      <div className={styles["banner__background"]}></div>
      <img src={srcImg} alt={altTexte}></img>
    </div>
  );
};

export default Banner;
