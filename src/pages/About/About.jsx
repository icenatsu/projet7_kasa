import React from "react";
import { useState, useEffect } from "react";
import styles from "pages/About/About.module.scss";
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
        let fetchconfig = await fetch("/dataabout.json");
        let response = Object.assign([], await fetchconfig.json());

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

  const { items, loading } = state;

  return (
    <>
      <Banner />
      <div className={styles.dropdowns}>
        {items.map((about, index) => {
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
