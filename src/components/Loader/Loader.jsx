import React from "react";
import styles from "components/Loader/Loader.module.scss";

// Rendu du loader en attente de la réponse de l'API Fetch
/*********************************************************/
const Loader = () => {
  return (
    <div className={styles.suspension}>
      <span className={styles.point}>.</span>
      <span className={styles.point}>.</span>
      <span className={styles.point}>.</span>
    </div>
  );
};

export default Loader;
