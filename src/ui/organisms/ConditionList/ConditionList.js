import React, { useState } from "react";
import styled from "styled-components";

import { ConditionBlock } from "../ConditionBlock/ConditionBlock";
import { SpecialButton } from "../../molecules";

export const ConditionList = ({ conditionsList, conditions }) => {
  const [currentList, getCurrentList] = useState([]);

  // let conditionsState = conditionsList;

  const addCondition = () => {};

  const selectList = conditionsList.filter(item => currentList.includes(item));

  const showConditions = currentList => {
    return currentList.map((item, _index) => (
      <ConditionBlock condition={item} key={item.name} />
    ));
  };

  console.log(conditions);

  return (
    <React.Fragment>
      <SpecialButton>
        Нажмите, чтобы добавить новое условие выборки. Все условия связываются
        между собой логическим "И"
      </SpecialButton>
      {/* <ConditionBlock condition={conditionsList[0]} /> */}
      {showConditions(conditionsList)}
    </React.Fragment>
  );
};
