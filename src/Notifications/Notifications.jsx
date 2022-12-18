import React, { useState, useEffect } from "react";
import styles from "Notifications/Notifications.module.scss";

const Notification = (props) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

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

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    setExit(true);
    setTimeout(() => {
      // Remove state and therefore the dom
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id,
      });
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();
  }, []);

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
