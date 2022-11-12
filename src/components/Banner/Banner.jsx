import React from "react";
import styles from "components/Banner/Banner.module.scss";
import BannerHome from "assets/img/home_bann.png";
import BannerAbout from "assets/img/about_bann.png";

const Banner = (props) => {
  const url = document.location.pathname === "/";
  const bannerSrc = url ? BannerHome : BannerAbout;
  const bannerAlt = url
    ? "Photo de paysage côtier"
    : "Photo de paysage Montagneux";

  return (
    <div className={styles.bann}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.background}></div>
      <img src={bannerSrc} alt={bannerAlt}></img>
    </div>
  );
};

export default Banner;
