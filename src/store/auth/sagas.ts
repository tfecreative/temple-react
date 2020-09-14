import { take, put, cancelled, fork, call, cancel } from "redux-saga/effects";
import { authActions } from "./types";
import { accountService } from "services/Account";
import { addNotificationStarted } from "store/notifications/actions";
import { history } from "store";

function* signOut() {
  yield put({ type: authActions.CLEAR_TOKEN });
  history.push("/sign-in");
}

function* signInFailed() {
  yield put({ type: authActions.SIGN_IN_FAILED });
  yield put(addNotificationStarted("sign in failed!"));
}

function* signInSuccess(token: string) {
  yield put({ type: authActions.SET_TOKEN, payload: token });
  yield put({ type: authActions.SIGN_IN_SUCCESS, payload: token });
  yield put(addNotificationStarted("Welcome!"));
  history.push("/");
}

function* authorize(username: string, password: string) {
  try {
    yield put({ type: authActions.SIGN_IN_STARTED });
    const { token } = yield call(accountService.signIn, username, password);
    yield signInSuccess(token);
  } catch (error) {
    yield signInFailed();
  } finally {
    if (yield cancelled()) {
      yield put({ type: authActions.SIGN_IN_CANCELLED });
    }
  }
}

export function* authFlow() {
  while (true) {
    const { payload } = yield take(authActions.SIGN_IN);
    const task = yield fork(authorize, payload.username, payload.password);

    const action = yield take([
      authActions.SIGN_OUT,
      authActions.SIGN_IN_FAILED,
    ]);

    if (action.type === authActions.SIGN_OUT) {
      yield cancel(task);
    }

    yield call(signOut);
  }
}
export default authFlow;
