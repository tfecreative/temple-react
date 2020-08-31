import React from "react";
import "./Notification.scss";

export interface INotificationProps {
  id: string;
  message: string;
  onClose?: (notificationId: string) => any;
}

export const NotificationComponent = (props: INotificationProps) => {
  return (
    <div className="notification" id={props.id}>
      <div className="notification__header">
        <button onClick={() => props.onClose}>X</button>
      </div>
      <div className="notification__body">
        {props.message && (
          <span className="notification-message">{props.message}</span>
        )}
      </div>
    </div>
  );
};
