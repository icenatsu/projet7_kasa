import React from "react";
import styles from "pages/Home/Home.module.scss";
import Card from "components/Card/Card";
import Banner from "components/Banner/Banner";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";
import useFetchdatas from "utils/Hook";

const Home = () => {
  // Gestion de fetch
  // Temps de chargement, récupération des données et modale si erreur
  /*******************************************************************/
  useFetchdatas("/logements.json");

  // Récupération des états
  /************************/
  const [items, loading, modal] = useFetchdatas("/logements.json");

  if (loading) {
    return <Loader />;
  }

  if (modal) {
    return (
      <>
        <Banner title="Chez vous, partout et ailleurs" />
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
