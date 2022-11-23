import React from "react";
import styles from "components/Menu/Menu.module.scss";
import arrow from "assets/img/arrow_back.svg";
import { useState } from "react";
import cx from "classnames";

const Menu = (props) => {
  const [active, setActive] = useState(false);

  const showContent = () => {
    setActive(!active);
  };

  return (
    <div
      className={[
        styles[`menu-container__${props.dropdown}`],
        styles[props.col],
      ].join(" ")}
    >
      <div
        className={styles[`menu-container__${props.dropdown}__element`]}
        onClick={showContent}
      >
        <p
          className={
            styles[`menu-container__${props.dropdown}__element__title`]
          }
        >
          {props.title}
        </p>
        <img src={arrow} alt="dropdown" className={active && styles.active} />
      </div>
      <div
        className={cx(
          styles[`menu-container__accommodation__content`],
          active && styles.active
        )}
      >
        <p className={styles[`menu-container__accommodation__content__text`]}>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Menu;
