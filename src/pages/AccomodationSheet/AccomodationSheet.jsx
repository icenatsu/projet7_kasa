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
  const [accommodation, setAccommodation] = useState("");
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

  console.log(accommodation);

  if (accommodation) {
    return (
      <>
        <Slide />
        <div className={styles.container}>
          <div className={styles["container-title-host"]}>
            <h1 className={styles["container-title-host__title"]}>
              {accommodation.title}
            </h1>
            <div className={styles["container-title-host__host"]}>
              <p className={styles["container-title-host__host__name"]}>
                {accommodation.host.name}
              </p>
              <img
                className={styles["container-title-host__host__picture"]}
                src={accommodation.host.picture}
              ></img>
            </div>
          </div>
          <p className={styles.location}>{accommodation.location}</p>
          <div className={styles.tagsAndRates}>
            <div className={styles["tagsAndRates__tags"]}>
              {accommodation.tags.map((tag, index) => {
                return (
                  <div
                    className={styles["tagsAndRates__tags__item"]}
                    key={index}
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
            <div className={styles["tagsAndRates__rating"]}>
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
          <div className={styles.dropdowns}>
            <Menu
              dropdown="dropdownAccomodation"
              title="Description"
              text={accommodation.description}
            />
            <Menu
              dropdown="dropdownAccomodation"
              title="Équipements"
              text={accommodation.equipments.map((equipments, index) => {
                return (
                  <div className={styles.equipments} key={index}>
                    {equipments}
                  </div>
                );
              })}
            />
          </div>
        </div>
      </>
    );
  }
};

export default AccommodationSheet;
