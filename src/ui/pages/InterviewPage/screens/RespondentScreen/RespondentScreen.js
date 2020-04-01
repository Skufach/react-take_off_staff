import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Title } from "../../../../atoms";
import {} from "../../../../molecules";
import { ConditionList } from "../../../../organisms";

const RespondentContainer = styled.div`
  height: 100%;
  width: 95%;
  /* background: rgba(122, 24, 42, 0.5); */
`;

const HeaderTitle = styled(Title)`
  justify-content: start;
  margin: 10px;
`;

export const RespondentScreen = ({
  conditionsList,
  conditions,
  fetchingTrigger
}) => {
  useEffect(() => {
    fetchingTrigger();
  }, []);

  return (
    <RespondentContainer>
      <HeaderTitle color="d9d9d9">Добавить опрос </HeaderTitle>
      <ConditionList conditionsList={conditionsList} conditions={conditions} />
    </RespondentContainer>
  );
};
