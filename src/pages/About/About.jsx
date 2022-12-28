import React from "react";
import { useState, useEffect } from "react";
import styles from "pages/About/About.module.scss";
import Banner from "components/Banner/Banner";
import Accordion from "components/Accordion/Accordion";
import Loader from "components/Loader/Loader";
import BannerAbout from "assets/img/about_bann.png";
import { useNotification } from "../../Notifications/NotificationsProvider";

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
    const dispatch = useNotification();

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let fetchconfig = await fetch("/dataAbout.json");
          let response = await fetchconfig.json();

          setState({
            items: response,
            loading: false,
          });
        } catch (e) {
          setState((s) => ({ ...s, loading: false }));
          dispatch({
            type: "ERROR",
            message: "Les informations ne sont pas disponibles",
          });
        }
      };
      fetchDatas();
    }, []);
    return [state.items, state.loading];
  }

  // Récupération des données et états après appel de Fetch
  /********************************************************/
  const [items, loading] = useFetchDatas();

  if (loading) {
    return <Loader />;
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
