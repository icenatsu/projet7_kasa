import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "pages/HouseDetails/HouseDetails.module.scss";
import Slide from "components/Slide/Slide";
import Accordion from "components/Accordion/Accordion";
import emptyStar from "assets/img/star_rate-empty.svg";
import fullStar from "assets/img/star_rate-full.svg";
import Loader from "components/Loader/Loader";
import { useNotification } from "../../Notifications/NotificationsProvider";

const HouseDetails = () => {
  // Tableau des rates
  /*******************/
  const stars = [1, 2, 3, 4, 5];

  // Gestion de fetch
  // Temps de chargement, récupération des données et msg flash si erreur
  /**********************************************************************/

  function useFetchDatas() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState({
      items: [],
      loading: true,
    });
    const dispatch = useNotification();

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let fetchconfig = await fetch("/logements.json");
          let response = await fetchconfig.json();

          const currentAccommodation = response.find(
            (accommodation) => accommodation.id === id
          );
          if (currentAccommodation === undefined) {
            navigate("404");
          }
          setState({
            items: currentAccommodation,
            loading: false,
          });
        } catch (e) {
          setState((s) => ({ ...s, loading: false }));
          dispatch({
            type: "ERROR",
            message: "Le logement n'est pas disponible",
          });
        }
      };
      fetchDatas();
    }, [id, navigate]);

    return [state.items, state.loading];
  }

  // Récupération des états à l'appel de fetch
  /********************************************/
  const [items, loading] = useFetchDatas();

  if (loading) {
    return <Loader />;
  }

  if (items.length !== 0)
    return (
      <>
        <div className={styles["container-pictures"]}>
          <Slide pictures={items.pictures}></Slide>
        </div>
        <section className={styles.container}>
          <div className={styles["container-general"]}>
            <div className={styles["container-infos"]}>
              <h1 className={styles["container-infos__title"]}>
                {items.title}
              </h1>
              <p className={styles["container-infos__location"]}>
                {items.location}
              </p>
              <div className={styles["container-infos__tags"]}>
                {items.tags.map((tag, index) => {
                  return (
                    <p
                      className={styles["container-infos__tags__item"]}
                      key={index}
                    >
                      {tag}
                    </p>
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
            <Accordion
              page="houseDetails"
              classList="flex_col_45"
              title="Description"
              text={items.description}
              style={{ borderRadius: `${10}px` }}
            />
            <Accordion
              page="houseDetails"
              classList="flex_col_45"
              title="Équipements"
              style={{ borderRadius: `${10}px` }}
              text={items.equipments.map((equipments, index) => {
                return (
                  <p className={styles.equipments} key={index}>
                    {equipments}
                  </p>
                );
              })}
            />
          </div>
        </section>
      </>
    );
};

export default HouseDetails;
