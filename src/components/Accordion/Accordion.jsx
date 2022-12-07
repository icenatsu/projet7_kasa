import React from "react";
import styles from "components/Accordion/Accordion.module.scss";
import arrow from "assets/img/arrow_back.svg";
import { useState } from "react";

const Accordion = ({ page, classList, text, title, style }) => {
  // Gestion de l'affichage de l'accordion
  /****************************************/
  const [active, setActive] = useState(false);

  const showContent = () => {
    setActive((current) => {
      return (current = !active);
    });
  };

  return (
    <div
      className={[styles[`container__${page}`], styles[classList]].join(" ")}
    >
      <div
        className={styles[`container__${page}__element`]}
        onClick={showContent}
        style={style}
      >
        <h2 className={styles[`container__${page}__element__title`]}>
          {title}
        </h2>
        <img
          src={arrow}
          alt="dropdown"
          className={active ? styles.active : ""}
        />
      </div>
      <div
        className={[
          styles[`container__${page}__content`],
          active && styles.active,
        ].join(" ")}
        style={style}
      >
        <div className={styles[`container__${page}__content__text`]}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
