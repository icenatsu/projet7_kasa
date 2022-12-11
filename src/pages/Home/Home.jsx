import React from "react";
import { useState, useEffect } from "react";
import styles from "pages/Home/Home.module.scss";
import Card from "components/Card/Card";
import Banner from "components/Banner/Banner";
import Loader from "components/Loader/Loader";
import BannerHome from "assets/img/home_bann.png";
import FlashError from "components/ErrorMessage/ErrorMessage";

const Home = () => {
  // Gestion de fetch
  // Temps de chargement, récupération des données et msg flash si erreur
  /**********************************************************************/
  function useFetchDatas() {
    const [state, setState] = useState({
      items: [],
      loading: true,
      flashError: false,
    });
    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let fetchconfig = await fetch("/logements.json");
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
        text="Les logements ne sont pas disponibles"
      />
      <Banner
        title="Chez vous, partout et ailleurs"
        srcImg={BannerHome}
        altTexte="Photo de paysage côtier"
      />
      <div className={styles.container}>
        {items.map((accos, index) => (
          <Card
            title={accos.title}
            cover={accos.cover}
            id={accos.id}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
