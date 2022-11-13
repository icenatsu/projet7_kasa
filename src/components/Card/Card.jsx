import React from "react";
import styles from "components/Card/Card.module.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <article className={styles.card}>
      <Link to={`acco/${props.id}`}>
        <p className={styles.card__title}>{props.title}</p>
        <div className={styles.card__layer}>
          <img src={props.cover} alt="location" />
        </div>
      </Link>
    </article>
  );
};

export default Card;
