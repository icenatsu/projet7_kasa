import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "pages/Home/Home.module.scss";
import Card from "components/Card/Card";
import Banner from "components/Banner/Banner";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";
import BannerHome from "assets/img/home_bann.png";

const Home = () => {
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
      const fetchData = async () => {
        try {
          let fetchconfig = await fetch("/logements.json");
          let response = await fetchconfig.json();

          setState({
            items: response,
            loading: false,
          });
        } catch (e) {
          setState((state) => ({ ...state, loading: false, modal: true }));
        }
      };
      fetchData();
    }, []);
    return [state.items, state.loading, state.modal];
  }
  useFetchDatas();

  const container = useRef();
  console.log(container);
  console.log(container.current);

  // Récupération des états à l'appel de Fetch
  /*******************************************/
  const [items, loading, modal] = useFetchDatas();

  if (loading) {
    return <Loader />;
  }

  if (modal) {
    return (
      <>
        <Banner
          title="Chez vous, partout et ailleurs"
          srcImg={BannerHome}
          altTexte="Photo de paysage côtier"
        />
        <Modal
          isShowing={modal}
          title="Erreur de chargement.."
          text="Les logements ne sont pas disponibles"
        ></Modal>
      </>
    );
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
