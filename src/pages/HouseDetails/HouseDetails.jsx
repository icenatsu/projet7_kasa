import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "pages/HouseDetails/HouseDetails.module.scss";
import Slide from "components/Slide/Slide";
import Accordion from "components/Accordion/Accordion";
import emptyStar from "assets/img/star_rate-empty.svg";
import fullStar from "assets/img/star_rate-full.svg";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";

const HouseDetails = () => {
  // Tableau des rates
  /*******************/
  const stars = [1, 2, 3, 4, 5];

  // Gestion de fetch
  // Temps de chargement, récupération des données et modale si erreur
  /********************************************************************/
  function useFetchdatas() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState({
      items: [],
      loading: true,
      modal: false,
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let fetchconfig = await fetch("/logement.json");
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
          setState((s) => ({ ...s, loading: false, modal: true }));
        }
      };
      fetchDatas();
    }, [id, navigate]);

    return [state.items, state.loading, state.modal];
  }
  useFetchdatas();

  // Récupération des états
  /************************/
  const [items, loading, modal] = useFetchdatas();

  if (loading) {
    return <Loader />;
  }

  if (modal) {
    return (
      <Modal
        isShowing={modal}
        title="Erreur de chargement.."
        text="Le logement n'est pas disponible"
      ></Modal>
    );
  }

  return (
    <>
      <div className={styles["container-pictures"]}>
        <Slide pictures={items.pictures}></Slide>
      </div>
      <div className={styles.container}>
        <div className={styles["container-general"]}>
          <div className={styles["container-infos"]}>
            <h1 className={styles["container-infos__title"]}>{items.title}</h1>
            <p className={styles["container-infos__location"]}>
              {items.location}
            </p>
            <div className={styles["container-infos__tags"]}>
              {items.tags.map((tag, index) => {
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
          <Accordion
            page="houseDetails"
            classList="menu_col_45"
            title="Description"
            text={items.description}
            style={{ borderRadius: `${10}px` }}
          />
          <Accordion
            page="houseDetails"
            classList="menu_col_45"
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
};

export default HouseDetails;
