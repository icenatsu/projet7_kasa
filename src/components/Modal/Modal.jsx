import React from "react";
import styles from "components/Modal/Modal.module.scss";
import { useEffect, useState, useRef } from "react";

const Modal = ({ isShowing, title, text }) => {
  // Compteur de l'affichage de la modale d'erreur
  /***********************************************/
  const [count, setCount] = useState(true);

  function useCountModal() {
    useEffect(() => {
      setTimeout(() => {
        setCount(false);
      }, 6000);
    }, []);

    return count;
  }
  useCountModal();

  // Fermeture de la modale
  /************************/
  const hide = () => {
    setCount(false);

    return count;
  };

  // Récupération de la largeur de la barre de progression
  // pour ajuster sa translation en fonction du responsive
  /*******************************************************/
  const widthProgressBar = useRef();

  function useRecupWidth() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(widthProgressBar.current.offsetWidth);
    }, []);

    return { width };
  }
  useRecupWidth();
  const { width } = useRecupWidth();

  if (count) {
    return (
      isShowing && (
        <>
          <div className={styles["container"]}>
            <div className={styles["modal"]}>
              <div className={styles["modal__header"]}>
                <div className={styles["modal__title"]}>{title}</div>
                <button
                  type="button"
                  className={styles["modal__close-button"]}
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className={styles["modal__body"]}>
                <div className={styles["modal__body__text"]}>{text}</div>
                <div
                  className={styles["modal__body__progress-bar"]}
                  ref={widthProgressBar}
                >
                  <div
                    className={styles["modal__body__progress-bar__bar"]}
                    style={{ transform: `translateX(${width}px)` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    );
  }
};

export default Modal;
