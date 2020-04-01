import React from "react";
import styled from "styled-components";

import { Text } from "../../atoms";
import { Link } from "react-router-dom";

const MenuUl = styled.ul`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  font-size: 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #b3d058;
`;

const MenuLi = styled.li`
  list-style: none;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid white;
  :hover {
    border-color: #b3d058;
  }
  :active {
    background: #f7f7f7;
  }
`;

const MyLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  color: #007b00;
  padding: 5px 0 5px;
  :hover {
    color: black;
  }
`;

export const InterviewNavigation = () => {
  return (
    <React.Fragment>
      <MenuUl>
        <MenuLi>
          <MyLink to="/interview/settings">
            <Text>Параметры</Text>
          </MyLink>
        </MenuLi>
        <MenuLi>
          <MyLink to="/interview/questions">
            <Text>Вопросы</Text>
          </MyLink>
        </MenuLi>
        <MenuLi>
          <MyLink to="/interview/logics">
            <Text>Логика</Text>
          </MyLink>
        </MenuLi>
        <MenuLi>
          <MyLink to="/interview/respondent">
            <Text>Респондент</Text>
          </MyLink>
        </MenuLi>
      </MenuUl>
    </React.Fragment>
  );
};
