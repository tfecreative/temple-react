import React from "react";
import "./Notifications.scss";
import { useSelector } from "react-redux";
import { IAppState } from "store/types";
import { NotificationComponent } from "notifications/Components/Notification";

export const Notifications = () => {
  const notifications = useSelector(
    (state: IAppState) => state.notifications.notifications
  );

  return (
    <div className="notifications">
      {notifications.map((n, i) => {
        return (
          <NotificationComponent
            id={n.id}
            key={`notification-${i}`}
            message={n.message}
          ></NotificationComponent>
        );
      })}
    </div>
  );
};
