import styled from 'styled-components';
import SideBar from './components/sidebar/sidebar'
import './App.css'

export const Main = styled.main`
   width: 100%;
`;

function App() {
  return (
    <>
      <SideBar>
      </SideBar>
      <Main></Main>
    </>
  )
}

export default App
