import styled from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.color.textDark};
  font-size: 14px;
`;

export const Close = styled(FaRegWindowClose)`
  color: ${(props) => props.theme.color.textDark};
  font-size: 20px;
  cursor: pointer;
`;
