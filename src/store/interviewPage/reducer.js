import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = {
  conditionsList: []
};

export const reducer = handleActions(
  {
    [actions.start]: state => ({ ...state }),
    [actions.success]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [actions.failure]: (state, action) => ({
      ...state,
      ...action.payload
    })
    // [actions.item]: (state, action) => ({
    //   ...state,
    //   ...action.payload
    // })
  },
  initialState
);
