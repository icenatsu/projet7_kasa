import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "pages/AccomodationSheet/AccomodationSheet.module.scss";
import Slide from "components/Slide/Slide";
import Menu from "components/Menu/Menu";
import axios from "axios";
import emptyStar from "assets/img/star_rate-empty.svg";
import fullStar from "assets/img/star_rate-full.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AccommodationSheet = () => {
  const [accommodation, setAccommodation] = useState("");
  const { id } = useParams();
  const stars = [1, 2, 3, 4, 5];

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios("/logements.json");

        const currentAccommodation = response.data.find(
          (accommodation) => accommodation.id === id
        );
        setAccommodation(currentAccommodation);
      } catch (e) {
        toast.error("Le logement n'est pas disponible");
      }
    };
    fetchDatas();
  }, []);

  if (accommodation) {
    return (
      <>
        <div className={styles["container-pictures"]}>
          <Slide array={accommodation.pictures}></Slide>
        </div>
        <div className={styles.container}>
          <div className={styles["container-general"]}>
            <div className={styles["container-infos"]}>
              <h1 className={styles["container-infos__title"]}>
                {accommodation.title}
              </h1>
              <p className={styles["container-infos__location"]}>
                {accommodation.location}
              </p>
              <div className={styles["container-infos__tags"]}>
                {accommodation.tags.map((tag, index) => {
                  return (
                    <div
                      className={styles["container-infos__tags__item"]}
                      key={index}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles["container-host-rate"]}>
              <div className={styles["container-host-rate__host"]}>
                <p className={styles["container-host-rate__host__name"]}>
                  {accommodation.host.name}
                </p>
                <img
                  className={styles["container-host-rate__host__picture"]}
                  src={accommodation.host.picture}
                ></img>
              </div>
              <div className={styles["container-host-rate__rating"]}>
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
          </div>
          <div className={styles.dropdowns}>
            <Menu
              dropdown="accommodation"
              title="Description"
              text={accommodation.description}
            />
            <Menu
              dropdown="accommodation"
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
  } else {
    <ToastContainer />;
  }
};

export default AccommodationSheet;
