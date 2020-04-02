import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { InterviewNavigation } from "../../organisms";
import {
  LogicsScreen,
  SettingsScreen,
  QuestionsScreen,
  RespondentScreen
} from "./screens";

const InterviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InterviewPage = ({}) => {
  return (
    <InterviewContainer>
      <InterviewNavigation />
      <Switch>
        <Route path="/interview/logics">
          <LogicsScreen />
        </Route>
        <Route path="/interview/settings">
          <SettingsScreen />
        </Route>
        <Route path="/interview/questions">
          <QuestionsScreen />
        </Route>
        <Route path="/interview/respondent">
          <RespondentScreen />
        </Route>
      </Switch>
    </InterviewContainer>
  );
};
