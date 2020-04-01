import { all, fork } from "redux-saga/effects";

import { interviewPageWatcher } from "./interviewPage/sagas";
import { replaceWatcher } from "./router/replaceWatcher";

const watchers = [interviewPageWatcher, replaceWatcher];

export function* rootSaga() {
  yield all(watchers.map(fork));
}
