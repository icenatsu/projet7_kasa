import React from "react";
import styles from "components/Slide/Slide.module.scss";
import { useState, useEffect } from "react";
import nextArrow from "assets/img/arrow_right.png";
import previousArrow from "assets/img/arrow_left.png";

const Slide = (props) => {
  const [currImg, setCurrImg] = useState(0);
  const [show, setShow] = useState(false);

  const nextImg = () => {
    setCurrImg(currImg === props.array.length - 1 ? 0 : currImg + 1);
  };

  const previousImg = () => {
    return setCurrImg(currImg === 0 ? props.array.length - 1 : currImg - 1);
  };

  useEffect(() => {
    const toogle = () => {
      if (props.array.length > 1) {
        setShow(!show);
      }
    };
    toogle();
  }, []);

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
      {props.array.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === currImg
                ? [styles["container__slide"], styles["active"]].join(" ")
                : styles["container__slide"]
            }
          >
            {index === currImg && <img src={slide} alt="photo du logement" />}
          </div>
        );
      })}
    </div>
  );
};

export default Slide;
