import React from "react";
import { useState, useEffect } from "react";
import styles from "pages/About/About.module.scss";
import Banner from "components/Banner/Banner";
import Accordion from "components/Accordion/Accordion";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";

const About = () => {
  function useFetchdatas() {
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

  useFetchdatas();

  const [items, loading, modal] = useFetchdatas();

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
