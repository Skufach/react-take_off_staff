import React from "react";
import styled from "styled-components";

import { IconDelete, IconPlus, Text } from "../../atoms";

const ButtonDiv = styled.div`
  border: 2px solid;
  min-width: 100px;
  border-color: ${({ status }) =>
    status === "attention"
      ? "#ff0000"
      : status === "success"
      ? "#06a326"
      : status === "special"
      ? "grey"
      : "#a6bf44"};
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 4px;
  color: ${({ status }) =>
    status === "attention"
      ? "#ff0000"
      : status === "success"
      ? "white"
      : status === "special"
      ? "#6fca82"
      : "#a6bf44"};
  background-color: ${({ status }) =>
    status === "success" ? "#06a326" : "white"};
`;

export const Button = ({
  IconLeft,
  IconRight,
  children,
  status,
  onPress
}) => {
  return (
    <ButtonDiv status={status} onClick={() => onPress()}>
      {IconLeft ? <IconLeft /> : null}
      <Text>{children}</Text>
      {IconRight ? <IconRight /> : null}
    </ButtonDiv>
  );
};


/* 4 статуса: 
1) attention - красная кнопка
2) success кнопка по типу "Далее"
3) special кнопка по типу "Протестировать опрос"
4) всё остальное. по типу "+ Добавить ..." */
