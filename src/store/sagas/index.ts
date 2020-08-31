import { all, fork } from "redux-saga/effects";
import watchNewAddNotificationsStarted from "store/notifications/sagas";

export const rootSaga = function* root() {
  yield all([
    fork(watchNewAddNotificationsStarted),
  ]);
};
