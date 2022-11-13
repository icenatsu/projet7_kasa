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

  console.log(active);
  return (
    <div className={styles["menu-container"]}>
      <div className={styles[`menu-container__${props.dropdown}`]}>
        <p className={styles[`menu-container__${props.dropdown}__title`]}>
          {props.title}
        </p>
        <img
          src={arrow}
          alt="dropdown"
          onClick={showContent}
          className={active && styles.active}
        />
      </div>
      {/* {active ? ( */}
      <div
        className={cx(
          styles[`menu-container__content`],
          active && styles.active
        )}
      >
        <p className={styles[`menu-container__content__text`]}>{props.text}</p>
      </div>
      {/* // ) : null} */}
    </div>
  );
};

export default Menu;
