import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "store/types";
import { NotificationComponent } from "notifications/Components/Notification";
import { removeNotificationStarted } from "store/notifications/actions";
import "./Notifications.scss";

export const Notifications = () => {
  const dispatch = useDispatch();

  const onClose = (notificationId: string) => {
    dispatch(removeNotificationStarted(notificationId));
  };

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
            onClose={onClose}
          ></NotificationComponent>
        );
      })}
    </div>
  );
};
