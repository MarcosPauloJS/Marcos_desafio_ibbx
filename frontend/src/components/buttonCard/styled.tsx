import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.color.textLight};
  cursor: pointer;
`;
