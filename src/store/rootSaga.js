import { all, fork } from "redux-saga/effects";

import { interviewPageWatcher } from "./interviewPage/sagas";
import { replaceWatcher } from "./router/replaceWatcher";
import { requestSagaWatcher } from "./interviewPage/requestSaga";

const watchers = [interviewPageWatcher, replaceWatcher, requestSagaWatcher];

export function* rootSaga() {
  yield all(watchers.map(fork));
}
