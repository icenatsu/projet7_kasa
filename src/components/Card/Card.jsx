import React from "react";
import styles from "components/Card/Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ cover, id, title }) => {
  return (
    <article className={styles.card}>
      <Link to={`acco/${id}`}>
        <p className={styles.card__title}>{title}</p>
        <div className={styles.card__layer}>
          <img src={cover} alt="location" />
        </div>
      </Link>
    </article>
  );
};

export default Card;
