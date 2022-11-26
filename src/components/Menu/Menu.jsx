import React from "react";
import styles from "components/Menu/Menu.module.scss";
import arrow from "assets/img/arrow_back.svg";
import { useState } from "react";
import cx from "classnames";

const Menu = ({ dropdown, col, text, title }) => {
  const [active, setActive] = useState(false);

  const showContent = () => {
    setActive(!active);
  };

  return (
    <div
      className={[styles[`menu-container__${dropdown}`], styles[col]].join(" ")}
    >
      <div
        className={styles[`menu-container__${dropdown}__element`]}
        onClick={showContent}
      >
        <p className={styles[`menu-container__${dropdown}__element__title`]}>
          {title}
        </p>
        <img src={arrow} alt="dropdown" className={active && styles.active} />
      </div>
      <div
        className={cx(
          styles[`menu-container__${dropdown}__content`],
          active && styles.active
        )}
      >
        <p className={styles[`menu-container__${dropdown}__content__text`]}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Menu;
