import styled from "styled-components";
import "./App.css";
import { Sidebar } from "./components";
import { AppRoutes } from "./router";
export const Main = styled.main`
  padding-top: 24px;
  padding-right: 24px;
  width: 100%;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding-left: 24px;
  }
`;

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Main>
        <AppRoutes />
      </Main>
    </>
  );
}

export default App;
