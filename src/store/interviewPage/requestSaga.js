import { put, call, takeEvery, select } from "redux-saga/effects";
import * as actions from "./actions";

import { getFormValues, reset } from "redux-form";

function* requestSagaWorker() {
  const values = yield select(getFormValues("conditionForm"));

  const ageList = [];
  if (values) {
    if (
      values.hasOwnProperty("ageRespondentLeft") &&
      values.hasOwnProperty("ageRespondentRight")
    ) {
      let range = {};
      const left = parseInt(values.ageRespondentLeft);
      const right = parseInt(values.ageRespondentRight);
      if (left > right) {
        range.left = right;
        range.right = left;
      } else {
        range.left = left;
        range.right = right;
      }

      ageList.push(range);
      delete values.ageRespondentLeft;
      delete values.ageRespondentRight;
      values.ageList = ageList;
    }

    console.log(values);
    yield put(reset("conditionForm"));
  } else {
    alert("Заполните форму");
  }
}

export function* requestSagaWatcher() {
  yield takeEvery(actions.request.toString(), requestSagaWorker);
}
