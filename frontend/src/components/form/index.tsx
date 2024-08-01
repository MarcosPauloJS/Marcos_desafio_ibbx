import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 400px;
  gap: 24px;
`;

export const Label = styled.label`
  display: flex;
  gap: 4px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  color: ${(props) => props.theme.color.textDark};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color.primary};
  padding: 5px 8px;
`;

export const Submit = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.textLight};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 8px 0;
  cursor: pointer;
`;
