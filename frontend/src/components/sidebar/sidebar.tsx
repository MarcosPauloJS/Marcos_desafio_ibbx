import { useState } from "react";
import { Container, Title, Header, Navbar, NavList, ListItem, Menu } from "./styled";
import { FaWifi, FaHome, FaBuffer } from "react-icons/fa";

function SideBar() {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <>
        {isOpen ? (
        <Container style={{width: '30px'}}>
          <Menu onClick={ () => setOpen(!isOpen)}/>
        </Container>
      ) : (
        <Container>
          <Header>
            <Title>Desafio IBBX</Title>
            <Menu onClick={ () => setOpen(!isOpen)}/>
          </Header>
          <Navbar>
            <NavList>
              <ListItem>
                <FaHome />
                Home
              </ListItem>
              <ListItem>
                <FaWifi />
                Ativo
              </ListItem>
              <ListItem>
                <FaBuffer />
                Sensores
              </ListItem>
            </NavList>
          </Navbar>
        </Container>
      )}
    </>
  );
}

export default SideBar;
