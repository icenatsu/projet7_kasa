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
    <div className={styles.container}>
      <div className={styles[props.dropdown]}>
        {props.title}
        <img src={arrow} alt="dropdown" onClick={showContent} />
      </div>
      {show ? <div className={styles.content}>{props.text}</div> : null}
    </div>
  );
};

export default Menu;
