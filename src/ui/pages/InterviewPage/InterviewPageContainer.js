import { connect } from "react-redux";

import { InterviewPage } from "./InterviewPage";

// import { getConditionsList } from "../../../store/interviewPage/selectors";

const mapStateToProps = state => ({
  // conditionsList: getConditionsList(state)
});

export const InterviewPageContainer = connect(
  mapStateToProps,
  {}
)(InterviewPage);
