import React from "react";
import styled from "styled-components";

import { Text } from "../../atoms";

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
  border-color: ${({ items }) => (items ? null : "red")};
`;

export const SelectInput = ({ items, type, onPress }) => {
  // console.log(typeof items);

  const selectList = items ? (
    items.map((item, index) => (
      <option key={index} value={item.value}>
        {item.value}
      </option>
    ))
  ) : (
    <option value="none">Нет условий</option>
  );

  return (
    <React.Fragment>
      <SelectBlock
        items={items}
        onChange={event => onPress(event.target.value)}
      >
        {selectList}
      </SelectBlock>
      {/* {type === "range" ? <input /> : <SelectBlock />} */}
    </React.Fragment>
  );
};

// тип карты -> gold, silver, бронзовый
// статус активна, в ожидании, Приостановлена, неактивна

// набор условий:
// {name, type, values}
// при range values = [{}, {} ...{}]
// при selecting values = ['', '' ... ''] или мб как range

// условия

