import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "pages/Home/Home.module.scss";
import Card from "components/Card/Card";
import Banner from "components/Banner/Banner";
import Loader from "components/Loader/Loader";
import BannerHome from "assets/img/home_bann.png";

const Home = () => {
  // Gestion de fetch
  // Temps de chargement et récupération des données
  /*************************************************/
  function useFetchDatas() {
    const [state, setState] = useState({
      items: [],
      loading: true,
    });
    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let fetchconfig = await fetch("/logements.json");
          let response = await fetchconfig.json();
          setState({
            items: response,
            loading: false,
          });
        } catch (e) {
          setState((s) => ({ ...s, loading: false }));
        }
      };
      fetchDatas();
    }, []);
    return [state.items, state.loading];
  }

  // Récupération des états à l'appel de Fetch
  /*******************************************/
  const [items, loading] = useFetchDatas();

  // Récupération de l'élément container
  /*************************************/
  const container = useRef();
  useEffect(() => {
    console.log(container.current);
  }, [items]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Banner
        title="Chez vous, partout et ailleurs"
        srcImg={BannerHome}
        altTexte="Photo de paysage côtier"
      />

      <div className={styles.container} ref={container}>
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
