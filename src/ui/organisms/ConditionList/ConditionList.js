import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ConditionBlock } from "../ConditionBlock/ConditionBlock";
import { SpecialButton, Button } from "../../molecules";
import { LineContainer } from "../../atoms";

const ConditionListContainer = styled.div`
  overflow-y: auto;
  display: block;
  height: 490px;
  max-width: 800px;
`;

export const ConditionList = ({
  conditionsList,
  conditions,
  requestTrigger
}) => {
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

  const deleteCondition = id => {
    const newCurrentList = currentList.filter(item => item !== id);
    const conditionIndex = conditions.findIndex(item => item.id === id);
    const newCondition = conditions[conditionIndex];
    const newActiveConditions = activeConditions.concat(newCondition);

    getCurrentList(newCurrentList);
    getActiveConditions(newActiveConditions);
  };

  const showConditions = currentList => {
    const newList = conditionsList.filter(item =>
      currentList.includes(item.id)
    );
    return newList.map((item, index) => (
      <ConditionBlock
        condition={item.items}
        conditions={conditions}
        key={item.name}
        onDelete={deleteCondition}
        id={item.id}
        indexCondition={index + 1}
        type={item.type}
        shortTitle={item.shortTitle}
        onPress={e => console.log(e)}
        name={item.name}
      />
    ));
  };

  const createCondition = activeConditions => (
    <ConditionBlock condition={activeConditions} onPress={handleChangeSelect} />
  );

  return (
    <ConditionListContainer>
      <form>
        {currentList ? showConditions(currentList) : null}

        {newCurrentActive === false && activeConditions.length !== 0 ? (
          <SpecialButton onPress={() => getNewCurrentActive(true)}>
            Нажмите, чтобы добавить новое условие выборки. Все условия
            связываются между собой логическим "И"
          </SpecialButton>
        ) : activeConditions.length !== 0 ? (
          createCondition(activeConditions)
        ) : null}
        <LineContainer>
          {currentList.length > 0 ? (
            <React.Fragment>
              <Button
                status="special"
                onPress={() => alert('Заполните поля и нажмите "Далее"')}
              >
                Протестировать опрос
              </Button>
              <Button status="success" onPress={requestTrigger}>
                Далее
              </Button>
            </React.Fragment>
          ) : null}
        </LineContainer>
      </form>
    </ConditionListContainer>
  );
};
