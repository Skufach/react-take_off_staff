import React from React
import styled from 'styled-components'

const ConditionList = () => {
    return <React.Fragment>

    </React.Fragment>
}




const conditionsList = [
    {
      name: "Тип карты лояльности",
      shortName: "Тип",
      type: "selecting",
      items: [{ value: "Black" }, { value: "Gold" }, { value: "Silver" }]
    },
    {
      name: "Статус карты лояльности",
      shortName: "Статус",
      type: "selecting",
      items: [
        { value: "активна" },
        { value: "временно недоступна" },
        { value: "неактивна" }
      ]
    },
    {
      name: "Возраст респондента",
      shortName: "Диапазон",
      type: "range",
      items: [
        { from: 0, to: 12 },
        { from: 13, to: 21 },
        { from: 66, to: 80 }
      ]
    }
  ];
  