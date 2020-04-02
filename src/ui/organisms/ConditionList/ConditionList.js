import React, { useState, useEffect } from "react";
// import styled from "styled-components";

import { ConditionBlock } from "../ConditionBlock/ConditionBlock";
import { SpecialButton } from "../../molecules";

export const ConditionList = ({ conditionsList, conditions }) => {
  const [currentList, getCurrentList] = useState([]);
  const [newCurrentActive, getNewCurrentActive] = useState(false);
  const [activeConditions, getActiveConditions] = useState([]);

  useEffect(() => {
    getActiveConditions(conditions);
  }, [conditions]);

  const handleChangeSelect = value => {
    const conditionIndex = conditions.findIndex(item => item.value === value);
    const conditionId = conditions[conditionIndex].id;

    const newActiveConditions = activeConditions.filter(
      item => item.id !== conditionId
    );

    getCurrentList([...currentList, conditionId]);
    getActiveConditions(newActiveConditions);
    getNewCurrentActive(false);
  };

  const showConditions = currentList => {
    const newList = conditionsList.filter(item =>
      currentList.includes(item.id)
    );
    return newList.map((item, _index) => (
      <ConditionBlock condition={item.items} key={item.name} />
    ));
  };

  const createCondition = activeConditions => (
    <ConditionBlock condition={activeConditions} onPress={handleChangeSelect} />
  );

  return (
    <React.Fragment>
      {currentList ? showConditions(currentList) : null}

      {newCurrentActive === false && activeConditions.length !== 0 ? (
        <SpecialButton onPress={() => getNewCurrentActive(true)}>
          Нажмите, чтобы добавить новое условие выборки. Все условия связываются
          между собой логическим "И"
        </SpecialButton>
      ) : activeConditions.length !== 0 ? (
        createCondition(activeConditions)
      ) : null}
    </React.Fragment>
  );
};
