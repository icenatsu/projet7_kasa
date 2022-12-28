import React from "react";
import styles from "pages/NotFound/NotFound.module.scss";
import { Link } from "react-router-dom";

// Gestion de la page 404 en cas de route no match
/*************************************************/
const NotFound = () => {
  return (
    <div className={styles.container}>
      <p className={styles.statut}>404</p>
      <p className={styles.text}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.homeLink}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default NotFound;
