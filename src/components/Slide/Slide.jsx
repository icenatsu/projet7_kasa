import React from "react";
import styles from "components/Slide/Slide.module.scss";
import { useState, useEffect } from "react";
import nextArrow from "assets/img/arrow_right.png";
import previousArrow from "assets/img/arrow_left.png";

const Slide = (props) => {
  const [currImg, setCurrImg] = useState(0);
  const [active, setActive] = useState(false);

  const nextImg = () => {
    setCurrImg(currImg === props.array.length - 1 ? 0 : currImg + 1);
  };

  const previousImg = () => {
    setCurrImg(currImg === 0 ? props.array.length - 1 : currImg - 1);
  };

  console.log(props.array.length);

  useEffect(() => {
    const toogle = () => {
      if (props.array.length > 1) {
        setActive(!active);
      }
    };
    toogle();
  }, []);

  console.log(active);

  return (
    <div className={styles["container"]}>
      <img
        className={styles["container__logement"]}
        src={props.array[currImg]}
        alt="photo du logement"
      />
      <div className={styles["container__next-previous"]}>
        <img
          className={active ? styles.active : ""}
          src={previousArrow}
          onClick={previousImg}
          alt="previous"
        />
        <img
          className={active ? styles.active : ""}
          src={nextArrow}
          onClick={nextImg}
          alt="next"
        />
      </div>
    </div>
  );
};

export default Slide;
