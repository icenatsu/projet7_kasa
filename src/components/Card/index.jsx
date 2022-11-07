import React from 'react';
import styles from 'components/Card/Card.module.scss'
import { Link } from 'react-router-dom';

const index = (props) => {
    console.log(props);
    return (
        <Link to={`acco/${props.id}`}>
        <article className={styles.card}>
            <img src={props.cover} alt="location" />
            <div className={styles.card__layer}>
                <p className={styles.card__layer__title}>{props.title}</p>
            </div>
        </article>
      </Link>
    );
};

export default index; 