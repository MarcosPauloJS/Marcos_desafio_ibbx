import styled from 'styled-components';
import './App.css'

const Title = styled.h1`
  font-size: 1.5em;
  color: ${(props) => props.theme.color.secondary};
`;
function App() {
  return (
    <Title>
      ibbx desafio
    </Title>
  )
}

export default App
