import React from "react";
import "./Notification.scss";

export interface INotificationProps {
  id: string;
  message: string;
  onClose: (id: string) => unknown;
}

export const NotificationComponent = ({
  id,
  message,
  onClose,
}: INotificationProps) => {
  return (
    <div className="notification" id={id}>
      <div className="notification__header">
        <button
          className="close-notification-button"
          id="close-notification"
          onClick={() => onClose(id)}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
      <div className="notification__body">
        {message && (
          <span className="notification-message" data-cy="notification-message">
            {message}
          </span>
        )}
      </div>
    </div>
  );
};
