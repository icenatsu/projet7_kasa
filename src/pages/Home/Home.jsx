import React from "react";
import styles from "pages/Home/Home.module.scss";
import Card from "components/Card/Card";
import Banner from "components/Banner/Banner";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [accommodations, setAccos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("./logements.json");
      setAccos(response.data);
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
    </>
  );
};

export default Home;
