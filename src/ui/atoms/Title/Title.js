import styled from "styled-components";

export const Title = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => (color ? "#" + color : "black")};
`;
