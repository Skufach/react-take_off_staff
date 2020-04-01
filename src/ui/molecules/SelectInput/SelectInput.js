import React, { useState } from "react";
import styled from "styled-components";

const SelectBlock = styled.select`
  width: 550px;
  height: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  padding: 6px;
  border-radius: 10px;
  border: 1.5px solid;
  border-color: ${({ items, current }) =>
    current === "" ? "green" : items ? null : "red"};
`;

export const SelectInput = ({ items, onPress }) => {
  // console.log(typeof items);

  const [currentValue, getCurrentValue] = useState("");

  const createList = () => {
    const list = items ? (
      items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.value}
        </option>
      ))
    ) : (
      <option value="none">Нет условий</option>
    );

    if (items) {
      list.unshift(
        <option key="uniq" value="" hidden>
          Выберите условие
        </option>
      );
    }
    return list;
  };

  const selectList = createList();

  return (
    <React.Fragment>
      <SelectBlock
        value={currentValue}
        items={items}
        onChange={event => {
          onPress(event.target.value);
          getCurrentValue(event.target.value);
        }}
        current={currentValue}
      >
        {selectList}
      </SelectBlock>
    </React.Fragment>
  );
};
