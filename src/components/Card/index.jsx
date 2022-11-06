import React from 'react';
import styles from 'components/Card/Card.module.scss'

const index = (props) => {
    return (
        <article className={styles.card}>
            <img src={props.cover} alt="location" />
            <div className={styles.card__layer}>
                <p className={styles.card__layer__title}>Titre de la location</p>
            </div>
        </article>
    );
};

export default index;