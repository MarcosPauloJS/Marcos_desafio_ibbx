import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border: none;

  > thead {
    font-size: 14px;
    color: ${(props) => props.theme.color.textLight};
    background-color: ${(props) => props.theme.color.secondary};

    > tr {
      border-radius: ${(props) => props.theme.borderRadius};
      overflow: hidden;

      > th {
        padding: 8px 8px;
        text-align: left;
        &:first-child {
          border-radius: ${(props) => props.theme.borderRadius} 0 0
            ${(props) => props.theme.borderRadius};
        }
        &:last-child {
          border-radius: 0 ${(props) => props.theme.borderRadius}
            ${(props) => props.theme.borderRadius} 0;
        }
      }
    }
  }

  > tbody {
    > tr {
      > td {
        padding: 8px 8px;
      }
    }
  }
`;
