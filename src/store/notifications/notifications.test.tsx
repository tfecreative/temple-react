import { runSaga } from "redux-saga";
import { takeEvery } from "redux-saga/effects";

import watchNewAddNotificationsStarted, { generators } from "./sagas";
import { notificationActions, NotificationAction } from "./types";
import { createNotification } from "notifications";
import {
  addNotificationCompleted,
  removeNotificationCompleted,
  removeNotificationStarted,
} from "store/notifications/actions";

const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

describe("Notifications", () => {
  const generator = watchNewAddNotificationsStarted();

  it("should return notification started", async () => {
    expect(generator.next().value).toEqual(
      takeEvery(
        notificationActions.ADD_NOTIFICATION_STARTED,
        generators.scheduler
      )
    );
  });

  it("should be finished on next iteration", () => {
    expect(generator.next().done).toBeTruthy();
  });

  it("should dispatch notification started action", async () => {
    const notification = createNotification("hello", {
      timeout: 1,
    });
    const act: NotificationAction = {
      type: notificationActions.ADD_NOTIFICATION_STARTED,
      payload: notification,
    };

    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      generators.scheduler,
      act
    );
    expect(dispatched).toEqual([addNotificationCompleted(notification)]);
  });

  it("should dispatch remove notification action when timeout is set", async () => {
    const notification = createNotification("hello", { timeout: 1 });
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      generators.timeout,
      notification
    );
    await timeout(3);
    expect(dispatched).toEqual([
      removeNotificationStarted(notification.id),
      removeNotificationCompleted(notification),
    ]);
  });

  it("should not dispatch remove notification action when timeout is zero", async () => {
    const notification = createNotification("hello", { timeout: 0 });
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      generators.timeout,
      notification
    );
    await timeout(2);
    expect(dispatched).toEqual([]);
  });
});
