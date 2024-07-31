import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.textLight};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  font-size: 14px;
`;

export const CardItem = styled.p``;

export const Footer = styled.div`
  display: flex;
  justify-content: end;
`;
