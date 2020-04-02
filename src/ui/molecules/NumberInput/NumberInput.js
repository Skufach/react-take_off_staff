import React from "react";
import styled from "styled-components";

const InputContainer = styled.input`
  width: 90px;
  height: 40px;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-align: center;
  margin-left: 6px;
`;

const InputLabel = styled.label`
  margin: auto;
  font-size: 16px;
`;

export const NumberInput = ({ limitPosition }) => {
  console.log(limitPosition);
  return (
    <React.Fragment>
      {limitPosition === "left" ? (
        <InputLabel>От</InputLabel>
      ) : limitPosition === "right" ? (
        <InputLabel>До</InputLabel>
      ) : null}
      <InputContainer type="number" />
    </React.Fragment>
  );
};

// limitPosition отвечает за label перед инпутом
