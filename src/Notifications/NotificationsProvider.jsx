import React, { useReducer, createContext, useContext } from "react";
import Notification from "Notifications/Notifications";
import styles from "Notifications/NotificationsProvider.module.scss";

// Création du contexte
const NotificationContext = createContext();

const NotificationsProvider = (props) => {
  //props que l'on enverra a nos composants enfants (qu'on englobe)
  // Utilisation du hook reducer pour effectuer des actions en fonction du type (ajout, suppression)
  /*************************************************************************************************/
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
    /* value = props dans le state (donc dispach)*/
    <NotificationContext.Provider value={dispatch}>
      {" "}
      <div className={styles["notification-wrapper"]}>
        {state.map((note) => {
          return <Notification dispatch={dispatch} key={note.id} {...note} />;
        })}
      </div>
      {props.children}
    </NotificationContext.Provider>
    // props.children Je partage les props à mes futurs enfants (que j'englobe)
  );
};

export default NotificationsProvider;

// Fonction qui permettra d'utiliser la notification en contexte
/***************************************************************/

export const useNotification = () => {
  const dispatch = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: Math.random(),
        ...props,
      },
    });
  };
};
