import React from "react";
import { useState, useEffect } from "react";
import styles from "pages/About/About.module.scss";
import axios from "axios";
import Banner from "components/Banner/Banner";
import Menu from "components/Menu/Menu";

const About = () => {
  const [state, setState] = useState({
    items: [],
    loading: true,
  });

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios("/dataabout.json");
        setState({
          items: response.data,
          loading: false,
        });
      } catch (e) {
        // toast.error("Le logement n'est pas disponible");
        setState((s) => ({ ...s, loading: false }));
      }
    };
    fetchDatas();
  }, []);

  const { items, loading } = state;
  // console.log(state);
  // console.log(state.items);

  return (
    <>
      <Banner />
      <div className={styles.dropdowns}>
        {state.items.map((about, index) => {
          return (
            <Menu
              dropdown="menuAbout"
              col="menu_col_80"
              title={about.title}
              text={about.text}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;
