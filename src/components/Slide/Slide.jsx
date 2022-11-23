import React from "react";
import styles from "components/Slide/Slide.module.scss";
import { useState, useEffect, useRef } from "react";
import nextArrow from "assets/img/arrow_right.png";
import previousArrow from "assets/img/arrow_left.png";

const Slide = (props) => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    currImg: 0,
    active: 0,
  });

  const nextImg = () => {
    setState({
      currImg:
        state.currImg === props.pictures.length - 1 ? 0 : state.currImg + 1,
      active: 1,
    });
    // }
  };

  const previousImg = () => {
    setState({
      currImg:
        state.currImg === 0 ? props.pictures.length - 1 : state.currImg - 1,
      active: -1,
    });
  };

  useEffect(() => {
    const toogle = () => {
      if (props.pictures.length > 1) {
        setShow(!show);
      }
    };
    toogle();
  }, []);

  const actif = state.active;
  function loadComponent(actif) {
    switch (actif) {
      case 1:
        return styles["nextactive"];

      case -1:
        return styles["prevactive"];

      case 0:
        return styles["neutral"];

      default:
        return styles["container__slide"];
    }
  }
  return (
    <div className={styles["container"]}>
      {show ? (
        <div className={styles["container__next-previous"]}>
          <img
            className={styles["container__next-previous__prev"]}
            src={previousArrow}
            onClick={previousImg}
            alt="previous"
          />
          <img
            className={styles["container__next-previous__next"]}
            src={nextArrow}
            onClick={nextImg}
            alt="next"
          />
        </div>
      ) : null}
      <div className={styles["container__img"]}>
        {props.pictures.map((slide, index) => {
          return (
            <img
              key={index}
              className={
                index === state.currImg
                  ? loadComponent(actif)
                  : styles["container__slide"]
              }
              src={slide}
              alt="photo du logement"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
