import { put, call, takeLatest } from "redux-saga/effects";
import { userActions } from "./types";
import { authActions } from "store/auth/types";
import { accountService } from "services/Account";

function* clearProfile() {
  yield put({
    type: userActions.CLEAR_PROFILE,
  });
}

function* loadProfile() {
  try {
    const profile = yield call(accountService.loadProfile);
    yield put({ type: userActions.SET_PROFILE, payload: { profile } });
    yield put({
      type: userActions.LOAD_PROFILE_SUCCESS,
      payload: { profile },
    });
  } catch (error) {
    yield put({
      type: userActions.CLEAR_PROFILE,
    });
    yield put({ type: userActions.LOAD_PROFILE_FAILED });
  }
}

export function* userSaga() {
  yield takeLatest(
    [authActions.SIGN_IN_SUCCESS, userActions.LOAD_PROFILE],
    loadProfile
  );
  yield takeLatest(
    [
      authActions.SIGN_OUT,
      authActions.SIGN_IN_CANCELLED,
      authActions.SIGN_IN_FAILED,
    ],
    clearProfile
  );
}

export default userSaga;
