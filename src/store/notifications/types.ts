import { Notification } from "notifications";

export type NotificationsState = { notifications: Notification[] };

export const notificationActions = {
  ADD_NOTIFICATION_STARTED: "Adding a new notification.",
  ADD_NOTIFICATION_COMPLETED: "Notification was added.",
  REMOVE_NOTIFICATION_STARTED: "Removing a notification.",
  REMOVE_NOTIFICATION_COMPLETED: "Notification was removed."
};

export interface NotificationAction {
  type: string;
  payload?: any;
}
