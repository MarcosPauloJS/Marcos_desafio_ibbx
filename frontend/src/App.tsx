import styled from "styled-components";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import SideBar from "./components/sidebar";
import { StrictMode } from "react";
import { router } from "./router";
export const Main = styled.main`
  padding-top: 24px;
  width: 100%;
`;

function App() {
  return (
    <>
      <SideBar></SideBar>
      <Main>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </Main>
    </>
  );
}

export default App;
