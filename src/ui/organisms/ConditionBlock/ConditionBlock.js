import React from "react";
import styled from "styled-components";

import { Title, IconDelete } from "../../atoms";
import { SelectInput, Button } from "../../molecules";

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

const LineContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "space-between")};
`;

export const ConditionBlock = ({ condition, onPress }) => {
  const color = setBg();
  return (
    <ConditionContainer color={color}>
      <LineContainer>
        <Title color={color}>Условие 1</Title>

        {condition ? (
          <SelectInput items={condition} onPress={onPress} />
        ) : null}
      </LineContainer>
      <LineContainer justify="flex-end">
        <Button IconLeft={IconDelete} status="attention">
          Удалить условие
        </Button>
      </LineContainer>
    </ConditionContainer>
  );
};
