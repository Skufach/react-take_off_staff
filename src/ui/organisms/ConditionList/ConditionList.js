import React from "react";
import styled from "styled-components";

import { ConditionBlock } from "../ConditionBlock/ConditionBlock";
import { SpecialButton } from "../../molecules";

export const ConditionList = ({ conditionsList }) => {
  console.log(conditionsList);

  return (
    <React.Fragment>
      <SpecialButton>
        Нажмите, чтобы добавить новое условие выборки. Все условия связываются
        между собой логическим "И"
      </SpecialButton>
      <ConditionBlock condition={conditionsList[0]} />
    </React.Fragment>
  );
};
