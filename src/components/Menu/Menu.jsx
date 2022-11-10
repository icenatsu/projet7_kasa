import React from "react";
import styles from "components/Menu/Menu.module.scss";

const index = (props) => {
  console.log(props);
  return (
    <div
      className={styles.container}
      width={props.width}
      height={props.height}
    ></div>
  );
};

export default index;
