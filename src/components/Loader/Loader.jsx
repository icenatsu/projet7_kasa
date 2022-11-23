import React from "react";
import styles from "components/Loader/Loader.module.scss";

const Loader = () => {
  return (
    <div class={styles.suspension}>
      <span class={styles.point}>.</span>
      <span class={styles.point}>.</span>
      <span class={styles.point}>.</span>
    </div>
  );
};

export default Loader;
