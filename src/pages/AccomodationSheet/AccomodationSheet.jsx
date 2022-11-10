import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "pages/AccomodationSheet/AccomodationSheet.module.scss";
import Slide from "components/Slide/Slide";
import Menu from "components/Menu/Menu";
import axios from "axios";
import emptyStar from "assets/img/star_rate-empty.svg";
import fullStar from "assets/img/star_rate-full.svg";

const AccommodationSheet = () => {
  const [accommodation, setAccommodation] = useState(false);
  const { id } = useParams();
  const stars = [1, 2, 3, 4, 5];

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

  if (accommodation) {
    return (
      <>
        <Slide />
        <div className={styles.container}>
          <h1 className={styles.title}>{accommodation.title}</h1>
          <p className={styles.location}>{accommodation.location}</p>
          <div className={styles.tagsAndRates}>
            <div className={styles.tags}>
              {accommodation.tags.map((tag, index) => {
                return (
                  <div className={styles.tag} key={index}>
                    {tag}
                  </div>
                );
              })}
            </div>
            <div className={styles.rating}>
              {stars.map((rate) =>
                accommodation.rating >= rate ? (
                  <img
                    key={rate.toString()}
                    className={styles.star}
                    src={fullStar}
                    alt="Full star"
                  />
                ) : (
                  <img
                    key={rate.toString()}
                    className={styles.star}
                    src={emptyStar}
                    alt="Empty star"
                  />
                )
              )}
            </div>
          </div>
          <Menu toto="tatat" />
        </div>
      </>
    );
  }
};

export default AccommodationSheet;
