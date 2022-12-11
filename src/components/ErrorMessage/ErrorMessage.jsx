import React, { forwardRef, useRef, useState, useEffect } from "react";
import styles from "components/ErrorMessage/ErrorMessage.module.scss";

const FlashError = forwardRef(({ title, text, active }, ref) => {
  // Récupération de la largeur du container du msg flash pour adaptation reponsive
  /********************************************************************************/
  const widthProgressBar = useRef();

  function useRecupWidth() {
    const [width, setWidth] = useState(0);
    useEffect(() => {
      if (active) {
        setWidth((current) => {
          return (current = widthProgressBar.current.offsetWidth);
        });
      }
    }, []);
    return { width };
  }
  const { width } = useRecupWidth();

  // Fermeture du message flash (x)
  /********************************/
  const [show, setShow] = useState(true);

  const hide = () => {
    setShow((current) => {
      return (current = false);
    });
    return show;
  };

  if (active && show) {
    return (
      <div className={styles.container} ref={widthProgressBar}>
        <div className={styles.infos}>
          <button
            type="button"
            className={styles["infos__close-button"]}
            onClick={hide}
          >
            <span>&times;</span>
          </button>
          <div className={styles["infos__title"]}>{title}</div>
          <div className={styles["infos__text"]}>{text}</div>
        </div>
        <div className={styles.progressbar}>
          <div
            className={styles["progressbar__bar"]}
            style={{ transform: `translateX(${width}px)` }}
          ></div>
        </div>
      </div>
    );
  }
});

export default FlashError;
