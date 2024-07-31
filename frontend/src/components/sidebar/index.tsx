import { useState } from "react";
import {
  Container,
  Title,
  Header,
  Navbar,
  NavList,
  Link,
  Menu,
  MenuMobile,
  ContainerMobile,
} from "./styled";
import { FaWifi, FaHome, FaBuffer } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      {isOpen ? (
        <Container>
          <Header>
            <Title>Desafio IBBX</Title>
            <Menu onClick={() => setOpen(!isOpen)} />
          </Header>
          <Navbar>
            <NavList>
              <li>
                <Link to="home">
                  <FaHome />
                  Home
                </Link>
              </li>
              <li>
                <Link to="ativo">
                  <FaWifi />
                  Ativo
                </Link>
              </li>
              <li>
                <Link to="sensor">
                  <FaBuffer />
                  Sensor
                </Link>
              </li>
            </NavList>
          </Navbar>
        </Container>
      ) : (
        <>
          <MenuMobile onClick={() => setOpen(!isOpen)} />

          <ContainerMobile style={{ width: "58px", position: "relative" }}>
            <Menu onClick={() => setOpen(!isOpen)} />
          </ContainerMobile>
        </>
      )}
    </>
  );
}

export default Sidebar;
