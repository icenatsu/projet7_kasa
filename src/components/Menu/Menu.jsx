import React from "react";
import styles from "components/Menu/Menu.module.scss";
import arrow from "assets/img/arrow_back.svg";
import { useState } from "react";

const Menu = (props) => {
  const [show, setShow] = useState(true);

  const showContent = () => {
    setShow(!show);
  };

  return (
    <div className={styles["menu-container"]}>
      <div className={styles[`menu-container__${props.dropdown}`]}>
        <p className={styles[`menu-container__${props.dropdown}__title`]}>
          {props.title}
        </p>
        <img src={arrow} alt="dropdown" onClick={showContent} />
      </div>
      {show ? (
        <div className={styles[`menu-container__content`]}>
          <div className={styles[`menu-container__content__text`]}>
            {props.text}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
