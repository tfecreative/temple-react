import { takeEvery, put, delay } from "redux-saga/effects";
import { notificationActions, NotificationAction } from "./types";
import {
  addNotificationCompleted,
  removeNotificationStarted,
  removeNotificationCompleted,
} from "./actions";
import { Notification } from "notifications";

/**
 * Watches for new notification requests
 */
function* watchNewAddNotificationsStarted() {
  yield takeEvery(
    notificationActions.ADD_NOTIFICATION_STARTED,
    notificationScheduler
  );
}

export function* handleTimeout(notification: Notification) {
  if (notification.options.timeout) {
    yield delay(notification.options.timeout);
    yield put(removeNotificationStarted(notification));
    yield put(removeNotificationCompleted(notification));
  }
}

/**
 * Display notification and handle any events
 * configured in the notification options.
 */
function* notificationScheduler(action: NotificationAction) {
  const notification = action.payload;
  yield put(addNotificationCompleted(notification));
  yield handleTimeout(notification)
}

export const generators = {
  scheduler: notificationScheduler,
  watcher: watchNewAddNotificationsStarted,
  timeout: handleTimeout,
};

export default watchNewAddNotificationsStarted;
