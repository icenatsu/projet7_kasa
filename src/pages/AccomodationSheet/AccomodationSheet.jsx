import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "pages/AccomodationSheet/AccomodationSheet.module.scss";
import Slide from "components/Slide/Slide";
import Menu from "components/Menu/Menu";
import emptyStar from "assets/img/star_rate-empty.svg";
import fullStar from "assets/img/star_rate-full.svg";
import { ToastContainer, toast } from "react-toastify";
import Loader from "components/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

const AccommodationSheet = () => {
  const { id } = useParams();
  const stars = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  const [state, setState] = useState({
    items: [],
    loading: true,
  });

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        let fetchconfig = await fetch("/logements.json");
        let response = await fetchconfig.json();

        const currentAccommodation = response.find(
          (accommodation) => accommodation.id === id
        );
        if (currentAccommodation === undefined) {
          navigate("*");
        }
        setState({
          items: currentAccommodation,
          loading: false,
        });
      } catch (e) {
        toast.error("Le logement n'est pas disponible");
        setState((s) => ({ ...s, loading: false }));
      }
    };
    fetchDatas();
  }, []);

  const { items, loading } = state;

  if (!loading) {
    if (items.length !== 0) {
      return (
        <>
          <div className={styles["container-pictures"]}>
            <Slide pictures={items.pictures}></Slide>
          </div>
          <div className={styles.container}>
            <div className={styles["container-general"]}>
              <div className={styles["container-infos"]}>
                <h1 className={styles["container-infos__title"]}>
                  {state.items.title}
                </h1>
                <p className={styles["container-infos__location"]}>
                  {items.location}
                </p>
                <div className={styles["container-infos__tags"]}>
                  {state.items.tags.map((tag, index) => {
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
                    {items.host.name}
                  </p>
                  <img
                    className={styles["container-host-rate__host__picture"]}
                    src={items.host.picture}
                    alt="présentation du logement"
                  ></img>
                </div>
                <div className={styles["container-host-rate__rating"]}>
                  {stars.map((rate) =>
                    items.rating >= rate ? (
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
                col="menu_col_45"
                title="Description"
                text={items.description}
                style={{ borderRadius: `${10}px` }}
              />
              <Menu
                dropdown="accommodation"
                col="menu_col_45"
                title="Équipements"
                style={{ borderRadius: `${10}px` }}
                text={items.equipments.map((equipments, index) => {
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
      return <ToastContainer />;
    }
  } else {
    return <Loader />;
  }
};

export default AccommodationSheet;
