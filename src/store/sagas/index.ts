import { all, fork } from "redux-saga/effects";
import watchNewAddNotificationsStarted from "store/notifications/sagas";
import { authFlow } from "store/auth/sagas";
import { userSaga } from "store/user/sagas";

export const rootSaga = function* root() {
  yield all([
    fork(watchNewAddNotificationsStarted),
    fork(authFlow),
    fork(userSaga),
  ]);
};
