import React from "react";
import styles from "components/Modal/Modal.module.scss";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

const Modal = ({ isShowing, title, text }) => {
  const [count, setCount] = useState(true);

  // Fonction du compteur de l'affichage de la modale d'erreur
  /***********************************************************/
  function useCountModal() {
    useEffect(() => {
      setTimeout(() => {
        setCount(false);
      }, 6000);
    }, []);

    return count;
  }
  useCountModal();

  // Fonction pour fermer la modale
  /*********************************/
  const hide = () => {
    setCount(false);

    return count;
  };

  const widthProgressBar = useRef();

  // Fonction pour récupérer la largeur de la barre de progression
  // pour ajuster sa translation en fonction du responsive
  /*******************************************************/
  function useRecupWidth() {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
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
