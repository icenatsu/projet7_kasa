import React from "react";
import styles from "components/Modal/Modal.module.scss";
import { useEffect, useState } from "react";

const Modal = ({ isShowing, title, text }) => {
  const [count, setCount] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCount(false);
    }, 3000);
  }, []);

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
                  //   onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className={styles["modal__body"]}>
                <div className={styles["modal__body__text"]}>{text}</div>
                <div className={styles["modal__body__progress-bar"]}>
                  <div
                    className={styles["modal__body__progress-bar__bar"]}
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
