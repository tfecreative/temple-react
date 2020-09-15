import {
  NotificationAction,
  NotificationsState,
  notificationActions,
} from "./types";

export const reducer = (
  state: NotificationsState = { notifications: [] },
  action: NotificationAction
) => {
  switch (action.type) {
    case notificationActions.ADD_NOTIFICATION_COMPLETED:
      return {
        notifications: [...state.notifications, action.payload],
      };
    case notificationActions.REMOVE_NOTIFICATION_STARTED:
      return {
        notifications: state.notifications.filter(
          (x) => x.id !== action.payload
        ),
      };
  }
  return state;
};

export default reducer;
