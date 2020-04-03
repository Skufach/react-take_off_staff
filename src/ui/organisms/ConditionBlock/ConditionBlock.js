import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Field } from "redux-form";

import { Title, IconDelete, Text, LineContainer } from "../../atoms";
import { SelectInput, Button, NumberInput } from "../../molecules";

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const ConditionContainer = styled.div`
  min-height: 160px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
    background-color: ${({ color }) => "#" + color};
  }
`;

// const LineContainer = styled.div`
//   padding: 20px;
//   display: flex;
//   justify-content: ${({ justify }) => (justify ? justify : "space-between")};

//   ${Text} {
//     margin-left: 0;
//   }
// `;

export const ConditionBlock = ({
  condition,
  onPress,
  onDelete,
  id,
  indexCondition,
  type,
  shortTitle,
  conditions,
  name
}) => {
  const [color, setColor] = useState("red");
  useEffect(() => {
    const newColor = setBg();
    setColor(newColor);
  }, [id]);

  const MySelectField = props => {
    return (
      <SelectInput
        value={props.input.value}
        onPress={props.input.onChange}
        items={props.items}
      />
    );
  };

  const MyNumberInput = props => {
    return (
      <NumberInput
        value={props.input.value}
        onPress={props.input.onChange}
        limitPosition={props.limitPosition}
      />
    );
  };

  const showTitle = id => {
    const val = conditions.find(item => item.id === id);
    return val.value;
  };

  return (
    <ConditionContainer color={color}>
      <LineContainer justify={id ? "center" : null}>
        <Title color={color}>Условие {indexCondition}</Title>

        {id ? (
          <Title>{showTitle(id)}</Title>
        ) : (
          <SelectInput
            items={conditions ? conditions : condition}
            onPress={onPress}
          />
        )}
      </LineContainer>
      <LineContainer justify="space-around">
        {type === "range" ? (
          <React.Fragment>
            <Text>{shortTitle}</Text>
            <Field
              name={`${name}Left`}
              component={MyNumberInput}
              limitPosition="left"
            />
            <Field
              name={`${name}Right`}
              component={MyNumberInput}
              limitPosition="right"
            />
          </React.Fragment>
        ) : type === "selecting" ? (
          <React.Fragment>
            <Text>{shortTitle}</Text>
            <Field
              name={`${name}`}
              component={MySelectField}
              items={condition}
            />
          </React.Fragment>
        ) : null}
      </LineContainer>
      <LineContainer justify="flex-end">
        <Button
          IconLeft={IconDelete}
          status="attention"
          onPress={() => onDelete(id)}
        >
          Удалить условие
        </Button>
      </LineContainer>
    </ConditionContainer>
  );
};
