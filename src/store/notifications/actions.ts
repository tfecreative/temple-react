import { NotificationAction, notificationActions } from "./types";
import { Notification } from "notifications";
import { createNotification } from "notifications";

export const addNotificationStarted = ({
  message,
}: Notification): NotificationAction => {
  const notification = createNotification(message);
  return {
    type: notificationActions.ADD_NOTIFICATION_STARTED,
    payload: notification,
  };
};

export const addNotificationCompleted = (
  notification: Notification
): NotificationAction => {
  return {
    type: notificationActions.ADD_NOTIFICATION_COMPLETED,
    payload: notification,
  };
};

export const removeNotificationStarted = (
  notification: Notification
): NotificationAction => {
  return {
    type: notificationActions.REMOVE_NOTIFICATION_STARTED,
    payload: notification,
  };
};

export const removeNotificationCompleted = (
  notification: Notification
): NotificationAction => {
  return {
    type: notificationActions.REMOVE_NOTIFICATION_COMPLETED,
    payload: notification,
  };
};
