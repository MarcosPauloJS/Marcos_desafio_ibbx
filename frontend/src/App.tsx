import styled from "styled-components";
import "./App.css";
import SideBar from "./components/sidebar";
import { AppRoutes } from "./router";
export const Main = styled.main`
  padding-top: 24px;
  width: 100%;
`;

function App() {
  return (
    <>
      <SideBar></SideBar>
      <Main>
        <AppRoutes />
      </Main>
    </>
  );
}

export default App;
