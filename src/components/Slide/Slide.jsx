import React from "react";
import styles from "components/Slide/Slide.module.scss";
import { useState, useEffect } from "react";
import nextArrow from "assets/img/arrow_right.png";
import previousArrow from "assets/img/arrow_left.png";

const Slide = (props) => {
  const [show, setShow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextImg = () => {
    return setCurrentSlide(
      currentSlide === props.pictures.length - 1 ? 0 : currentSlide + 1
    );
  };

  const previousImg = () => {
    return setCurrentSlide(
      currentSlide === 0 ? props.pictures.length - 1 : currentSlide - 1
    );
  };

  useEffect(() => {
    const toogle = () => {
      if (props.pictures.length > 1) {
        setShow(!show);
      }
    };
    toogle();
  }, []);

  return (
    <div className={styles["slide"]}>
      {show ? (
        <div className={styles["slide__next-previous"]}>
          <img
            className={styles["slide__next-previous__prev"]}
            src={previousArrow}
            onClick={previousImg}
            alt="previous"
          />
          <img
            className={styles["slide__next-previous__next"]}
            src={nextArrow}
            onClick={nextImg}
            alt="next"
          />
        </div>
      ) : null}
      <div
        className={styles["slide__content"]}
        style={{ transform: `translateX(${-currentSlide * 100}% )` }}
      >
        {props.pictures.map((picture, index) => {
          return (
            <div className={styles["slide__content__item"]} key={index}>
              {props.pictures.length === 1 ? (
                <img
                  src={picture}
                  alt="illustration du logement"
                  style={{ height: "auto" }}
                />
              ) : (
                <img src={picture} alt="illustration du logement" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
