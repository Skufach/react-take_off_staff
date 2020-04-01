import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";

import { reducer as interviewPage } from "./interviewPage/reducer";

export const createRootReducer = history =>
  combineReducers({
    interview: interviewPage,
    // form: formReducer,
    router: connectRouter(history)
  });
