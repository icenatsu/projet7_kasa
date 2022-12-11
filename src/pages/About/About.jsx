import React from "react";
import { useState, useEffect } from "react";
import styles from "pages/About/About.module.scss";
import Banner from "components/Banner/Banner";
import Accordion from "components/Accordion/Accordion";
import Loader from "components/Loader/Loader";
import BannerAbout from "assets/img/about_bann.png";
import FlashError from "components/ErrorMessage/ErrorMessage";

const About = () => {
  // Gestion de fetch
  // Temps de chargement, récupération des données et msg flash si erreur
  /***********************************************************************/
  function useFetchDatas() {
    const [state, setState] = useState({
      items: [],
      loading: true,
      flashError: false,
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let fetchconfig = await fetch("/dataabout.json");
          let response = await fetchconfig.json();

          setState({
            items: response,
            loading: false,
            flashError: false,
          });
        } catch (e) {
          setState((s) => ({ ...s, loading: false, flashError: true }));
        }
      };
      fetchDatas();
    }, []);
    return [state.items, state.loading, state.flashError];
  }

  // Récupération des états à l'appel de Fetch
  /*******************************************/
  const [items, loading, flashError] = useFetchDatas();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <FlashError
        active={flashError}
        title="Erreur de chargement..."
        text="Les informations ne sont pas disponibles"
      />
      <Banner srcImg={BannerAbout} altTexte="Photo de paysage de montagnes" />
      <div className={styles.dropdowns}>
        {items.map((about, index) => {
          return (
            <Accordion
              page="about"
              classList="flex_col_80"
              title={about.title}
              text={about.text}
              key={index}
              style={{ borderRadius: `${5}px` }}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;
