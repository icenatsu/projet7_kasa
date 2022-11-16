import React from "react";
import styles from "pages/Home/Home.module.scss";
import Card from "components/Card/Card";
import Banner from "components/Banner/Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./logements.json");
        setAccommodations(response.data);
      } catch (e) {
        toast.error("Les logements ne sont pas disponibles");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" />
      <div className={styles.container}>
        {accommodations.map((accos, index) => (
          <Card
            title={accos.title}
            cover={accos.cover}
            id={accos.id}
            key={index}
          />
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
