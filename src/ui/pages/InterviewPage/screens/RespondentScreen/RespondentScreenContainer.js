import { connect } from "react-redux";

import { RespondentScreen } from "./RespondentScreen";

import {
  getConditionsList,
  getConditions
} from "../../../../../store/interviewPage/selectors";

import { trigger as fetchingTrigger } from "../../../../../store/interviewPage/actions";

const mapStateToProps = state => ({
  conditionsList: getConditionsList(state),
  conditions: getConditions(state)
});

export const RespondentScreenContainer = connect(mapStateToProps, {
  fetchingTrigger
})(RespondentScreen);
