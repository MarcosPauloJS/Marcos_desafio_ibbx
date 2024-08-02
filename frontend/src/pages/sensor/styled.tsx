import styled from "styled-components";
import ReactEcharts from "echarts-for-react";

export const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    max-width: none;
  }
`;

export const Echarts = styled(ReactEcharts)`
  width: 60%;
  flex-grow: 1;
  background-color: ${(props) => props.theme.color.primary};
  padding: 16px;
  border-radius: ${(props) => props.theme.borderRadius};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const CardHighlight = styled.div`
  height: 50%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.textLight};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const CardsWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

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
