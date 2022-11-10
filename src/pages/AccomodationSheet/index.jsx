import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "pages/AccomodationSheet/AccomodationSheet.module.scss";
import Slide from "components/Slide";
// import Menu from "components/Menu";
import axios from "axios";

const AccommodationSheet = () => {
  const [accommodation, setAccommodation] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await axios("/logements.json");
      const currentAccommodation = response.data.find(
        (accommodation) => accommodation.id === id
      );
      setAccommodation(currentAccommodation);
    };
    fetchDatas();
  }, [id]);

  console.log(accommodation);

  if (accommodation != []) {
    return (
      <>
        <Slide />
        <h1 className={styles.title}>{accommodation.title}</h1>
        <p className={styles.location}>{accommodation.location}</p>
        <div className={styles.tags}>
          {accommodation.tags.map((tag, index) => {
            return (
              <div>
                {tag}, {index}
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default AccommodationSheet;
