import React from "react";
import styled from "styled-components";

import { Text } from "../../atoms";

const ButtonDiv = styled.div`
  border: 1px solid;
  border-color: grey;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 100px;
  border-radius: 4px;
  color: #6fca82;
  margin: 10px 0;
  ${Text} {
    width: 80%;
  }
`;

const Plus = styled.div`
  font-size: 32px;
`;

export const SpecialButton = ({ children, onPress }) => {
  return (
    <ButtonDiv onClick={() => onPress()}>
      <Plus>&#10010;</Plus>
      <Text>{children}</Text>
    </ButtonDiv>
  );
};
