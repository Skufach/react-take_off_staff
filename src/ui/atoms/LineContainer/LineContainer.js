import styled from "styled-components";

export const LineContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "space-between")};
`;
