import React from "react";
import styles from "components/Card/Card.module.scss";
import { Link } from "react-router-dom";

// Gestion du lien, de l'image et titre du logement
/**************************************************/
const Card = ({ cover, id, title }) => {
  return (
    <article className={styles.card}>
      <Link to={`acco/${id}`}>
        <h2 className={styles.card__title}>{title}</h2>
        <div className={styles.card__layer}>
          <img src={cover} alt="location" />
        </div>
      </Link>
    </article>
  );
};

export default Card;
