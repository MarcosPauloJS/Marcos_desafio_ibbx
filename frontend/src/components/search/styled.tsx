import styled from "styled-components";

export const Describe = styled.h3`
  font-size: 16px;
`;

export const Wapper = styled.div`
  color: ${(props) => props.theme.color.textLight};
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 16px;
`;

export const SearchInput = styled.input`
  color: inherit;
  font-size: 14px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

export const WrapperInput = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  padding: 5px 8px;
  border-bottom: 1px solid ${(props) => props.theme.color.textLight};
`;
