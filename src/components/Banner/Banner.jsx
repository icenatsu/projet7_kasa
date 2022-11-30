import React from "react";
import styles from "components/Banner/Banner.module.scss";
import BannerHome from "assets/img/home_bann.png";
import BannerAbout from "assets/img/about_bann.png";

const Banner = ({ title }) => {
  // Récupérationn du pathname de la page
  /**************************************/
  const pathname = document.location.pathname;

  // Initialisation src et alt de l'image de la banière
  /****************************************************/
  let bannerSrc = "";
  let bannerAlt = "";

  // Switch de la gestion des images de la banière en fonction des pages
  /*********************************************************************/
  switch (pathname) {
    case "/":
      bannerSrc = BannerHome;
      bannerAlt = "Photo de paysage côtier";
      break;

    case "/about":
      bannerSrc = BannerAbout;
      bannerAlt = "Photo de paysage de montagnes";
      break;
  }

  return (
    <div className={styles.banner}>
      <h1 className={styles["banner__title"]}>{title}</h1>
      <div className={styles["banner__background"]}></div>
      <img src={bannerSrc} alt={bannerAlt}></img>
    </div>
  );
};

export default Banner;
