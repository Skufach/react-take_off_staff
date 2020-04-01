import React from "react";
import styled from "styled-components";

import { Text } from "../../atoms";
import { Link } from "react-router-dom";

const MenuUl = styled.ul`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  padding: 0;
  font-size: 16px;
  border-right: 1px solid #f6f6f6;
`;

const MenuImg = styled.img`
  width: 50px;
  height: 50px;
  filter: invert();
  color: red;
  padding-top: 15px;
`;

const MenuCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid red;
  background: red;
  padding: 10px;
  margin: 10px 0 10px;
`;

const MenuLi = styled.li`
  list-style: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1.5px solid white;
  :hover {
    border-color: #b3d058;

    ${Text} {
      color: #b3d058;
    }
    ${MenuImg} {
      filter: sepia() saturate(10000%) hue-rotate(15deg);
    }

    ${MenuCircle} {
      border-color: #b3d058;
      background: #b3d058;
    }
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
  color: black;
  padding: 5px 0 5px;
  text-align: center;
`;

export const Menu = () => {
  return (
    <React.Fragment>
      <MenuUl>
        <MenuLi>
          <MyLink to="/">
            <MenuCircle />
          </MyLink>
        </MenuLi>
        <MenuLi>
          <MyLink to="/interview">
            <MenuImg src={require("../../../images/requests.png")} />
            <Text>Опросы</Text>
          </MyLink>
        </MenuLi>
        <MenuLi>
          <MyLink to="/users">
            <MenuImg src={require("../../../images/employees.png")} />
            <Text>Пользователи</Text>
          </MyLink>
        </MenuLi>
        <MenuLi>
          <MyLink to="/blacklist">
            <MenuImg src={require("../../../images/knowledge.png")} />
            <Text>Чёрные списки</Text>
          </MyLink>
        </MenuLi>
        <MenuLi>
          <MyLink to="/callcenter">
            <MenuImg src={require("../../../images/customers.png")} />
            <Text>Колл-центр</Text>
          </MyLink>
        </MenuLi>
      </MenuUl>
    </React.Fragment>
  );
};
