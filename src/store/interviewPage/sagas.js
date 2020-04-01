import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";

function* interviewPageWorker() {
  yield put(actions.start());

  try {
    const res = yield call(() =>
      fetch(
        "https://my-json-server.typicode.com/Skufach/react-take_off_staff/db",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      )
    );

    const status = res.status;
    const data = yield call([res, res.json]);
    const conditionsList = yield data.conditionsList;
    const conditions = yield data.conditions;

    if (status === 200) {
      yield put(
        actions.success({
          conditionsList: conditionsList,
          conditions: conditions
        })
      );
    } else {
      yield put(actions.failure());
    }
  } catch (e) {
    console.warn(e);
    yield put(actions.failure());
  }
}

export function* interviewPageWatcher() {
  yield takeEvery(actions.trigger.toString(), interviewPageWorker);
}
