import React from "react";
import styles from "pages/Home/Home.module.scss";
import Card from "components/Card";
import { useState, useEffect } from "react";
import { getAccos } from "api/Acco";

const Home = () => {
  const [accos, setTodos] = useState([]);

  useEffect(() => {
    async function getAccosLoad() {
      const accos = await getAccos();
      setTodos(accos);
    }
    getAccosLoad();
  }, []);

  return (
    <div className={styles.container}>
      {accos.map((accos, index) => (
        <Card
          title={accos.title}
          cover={accos.cover}
          id={accos.id}
          key={index}
        />
      ))}
    </div>
  );
};

export default Home;
