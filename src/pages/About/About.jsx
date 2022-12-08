import React from "react";
import { useState, useEffect } from "react";
import styles from "pages/About/About.module.scss";
import Banner from "components/Banner/Banner";
import Accordion from "components/Accordion/Accordion";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";
import BannerAbout from "assets/img/about_bann.png";

const About = () => {
  // Gestion de fetch
  // Temps de chargement, récupération des données et modale si erreur
  /*******************************************************************/
  function useFetchDatas() {
    const [state, setState] = useState({
      items: [],
      loading: true,
      modal: false,
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let fetchconfig = await fetch("/dataabout.json");
          let response = await fetchconfig.json();

          setState({
            items: response,
            loading: false,
            modal: false,
          });
        } catch (e) {
          setState((s) => ({ ...s, loading: false, modal: true }));
        }
      };
      fetchDatas();
    }, []);
    return [state.items, state.loading, state.modal];
  }

  // Récupération des états à l'appel de Fetch
  /*******************************************/
  const [items, loading, modal] = useFetchDatas();

  if (loading) {
    return <Loader />;
  }

  if (modal) {
    return (
      <>
        <Banner srcImg={BannerAbout} altTexte="Photo de paysage de montagnes" />
        <Modal
          isShowing={modal}
          title="Erreur de chargement.."
          text="Les informations ne sont pas disponibles"
        ></Modal>
      </>
    );
  }

  return (
    <>
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
