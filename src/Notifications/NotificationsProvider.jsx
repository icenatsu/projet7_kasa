import React, { useReducer, createContext, useContext } from "react";
import Notification from "Notifications/Notifications";
import styles from "Notifications/NotificationsProvider.module.scss";

const NotificationContext = createContext();

const NotificationsProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((el) => el.id !== action.id);
      default:
        return state;
    }
  }, []);

  return (
    <NotificationContext.Provider value={dispatch}>
      <div className={styles["notification-wrapper"]}>
        {state.map((note) => {
          return <Notification dispatch={dispatch} key={note.id} {...note} />;
        })}
      </div>
      {props.children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const dispatch = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: 5,
        ...props,
      },
    });
  };
};

export default NotificationsProvider;
