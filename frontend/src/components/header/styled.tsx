import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.color.primary};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  height: fit-content;
  color: ${(props) => props.theme.color.textLight};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.color.secondary};
  padding: 5px 10px;
  cursor: pointer;

  > svg {
    font-size: 16px;
  }
`;
