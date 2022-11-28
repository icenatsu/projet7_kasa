import React from "react";
import styles from "pages/Home/Home.module.scss";
import Card from "components/Card/Card";
import Banner from "components/Banner/Banner";
import { useState, useEffect } from "react";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";

const Home = () => {
  function useFetchdatas() {
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

  useFetchdatas();

  const [items, loading, modal] = useFetchdatas();

  if (loading) {
    return <Loader />;
  }

  if (modal) {
    return (
      <>
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
      <Banner title="Chez vous, partout et ailleurs" />
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
