import React from "react";
import styles from "pages/Home/Home.module.scss";
import Card from "components/Card/Card";
import Banner from "components/Banner/Banner";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/Loader/Loader";

const Home = () => {
  const [state, setState] = useState({
    items: [],
    loading: true,
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
        console.log(e);
        toast.error("Les logements ne sont pas disponibles");
        setState((state) => ({ ...state, loading: false }));
      }
    };
    fetchData();
  }, []);

  const { items, loading } = state;

  if (!loading) {
    if (items.length !== 0) {
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
    } else {
      return <ToastContainer />;
    }
  } else {
    return <Loader />;
  }
};

export default Home;
