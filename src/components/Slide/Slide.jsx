import React from "react";
import styles from "components/Slide/Slide.module.scss";
import { useState, useEffect, useReducer } from "react";
import nextArrow from "assets/img/arrow_right.png";
import previousArrow from "assets/img/arrow_left.png";

const Slide = ({ pictures }) => {
  // Gestion de l'état de l'image courante
  // en fonction des boutons prev ou next
  /****************************************/
  const [currentSlide, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return state === pictures.length - 1 ? 0 : state + 1;
      case "prev":
        return state === 0 ? pictures.length - 1 : state - 1;

      default:
        throw new Error("L'action" + action.type + " est inconnue.");
    }
  }

  // Gestion de la visibilité des boutons prev et next
  // en fonction du nombre d'images (si plus d'une image)
  /*******************************************************/
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toogle = () => {
      if (pictures.length > 1) {
        setShow(!show);
      }
    };
    toogle();
  }, [pictures]);

  return (
    <div className={styles["slide"]}>
      {show ? (
        <div className={styles["slide__next-previous"]}>
          <img
            className={styles["slide__next-previous__prev"]}
            src={previousArrow}
            onClick={() => dispatch({ type: "prev" })}
            alt="previous"
          />
          <img
            className={styles["slide__next-previous__next"]}
            src={nextArrow}
            onClick={() => dispatch({ type: "next" })}
            alt="next"
          />
        </div>
      ) : null}
      <div
        className={styles["slide__content"]}
        style={{ transform: `translateX(${-currentSlide * 100}% )` }}
      >
        {pictures.map((picture, index) => {
          return (
            <div className={styles["slide__content__item"]} key={index}>
              <img src={picture} alt="illustration du logement" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
