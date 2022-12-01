import React from "react";
import styles from "pages/About/About.module.scss";
import Banner from "components/Banner/Banner";
import Accordion from "components/Accordion/Accordion";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";
import useFetchdatas from "utils/Hook";

const About = () => {
  // Récupération des états à l'appel de Fetch
  /*******************************************/
  const [items, loading, modal] = useFetchdatas("/dataabout.json");

  if (loading) {
    return <Loader />;
  }

  if (modal) {
    return (
      <>
        <Banner />
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
      <Banner />
      <div className={styles.dropdowns}>
        {items.map((about, index) => {
          return (
            <Accordion
              page="about"
              classList="menu_col_80"
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
