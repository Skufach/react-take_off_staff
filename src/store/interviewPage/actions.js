import { createAction } from "redux-actions";

export const trigger = createAction("interviewPage->TRIGGER");
export const start = createAction("interviewPage->START");
export const success = createAction(
  "interviewPage->SUCCESS",
  ({ conditionsList }) => ({ conditionsList })
);

export const failure = createAction("interviewPage->FAILURE");

// export const item = createAction("requestScreen->ITEM", ({ updateItem }) => ({
//   updateItem
// }));
