import React from "react";
import styles from "components/Menu/Menu.module.scss";

const Menu = (props) => {
  // console.log(toto); // Affiche bien menu
  return <div className={styles[props.toto]}>test</div>;
};

export default Menu;

// {
//   /* <div className={styles["Event-Entries"]}></div> */
// }
