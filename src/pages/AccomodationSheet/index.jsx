import React from "react";
import styles from "pages/AccomodationSheet/AccomodationSheet.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slide from "components/Slide";
// import Menu from "components/Menu";
import axios from "axios";

const AccommodationSheet = () => {
  const [acco, setAcco] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await axios("/logements.json");
      const acco = response.data.find((accoId) => accoId.id === id);
      setAcco(acco);
      console.log("updated");
    };
    fetchDatas({});
    console.log("mounted");
  }, []);

  console.log(acco);

  return (
    <>
      <Slide />
      <div>
        <h1 className={styles.title}>{acco.title}</h1>
        <p className={styles.location}>{acco.location}</p>
      </div>
      <div className={styles.tags}>
        {acco.tags.map((tag, index) => {
          console.log(tag, index);
          return (
            <div>
              {tag}, {index}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AccommodationSheet;
