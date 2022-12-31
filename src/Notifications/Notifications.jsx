import React, { useState, useEffect } from "react";
import styles from "Notifications/Notifications.module.scss";

// Notification flash (succes / error)
/*************************************/

const Notification = (props) => {
  // Gestion des états de la barre de progression
  /**********************************************/
  // - Sortie
  const [exit, setExit] = useState(false);
  // - Largeur
  const [width, setWidth] = useState(0);
  // - Interval
  const [intervalID, setIntervalID] = useState(null);

  // Configuration de de la barre de progression
  /*********************************************/
  // - Démarrage
  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }
        return prev;
      });
    }, 20);
    setIntervalID(id);
  };

  // - Pause
  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  // - Fermeture
  const handleCloseNotification = () => {
    setExit(true);
    setTimeout(() => {
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id,
      });
    }, 400);
  };

  // Activation
  /************/
  // - Démarrage de l'interval
  useEffect(() => {
    handleStartTimer();
  }, []);

  // - Fermeture en fonction de la largeur
  useEffect(() => {
    if (width === 100) {
      handleCloseNotification();
    }
    // eslint-disable-next-line
  }, [width]);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={[
        styles["notification-item"],
        styles[`${props.type === "SUCCESS" ? "success" : "error"}`],
        styles[exit ? "exit" : ""],
      ].join(" ")}
    >
      <p>{props.message}</p>
      <div className={styles["bar"]} style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default Notification;
