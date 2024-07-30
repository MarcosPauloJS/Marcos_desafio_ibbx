import { useState } from "react";
import {
  Container,
  Title,
  Header,
  Navbar,
  NavList,
  Link,
  Menu,
} from "./styled";
import { FaWifi, FaHome, FaBuffer } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen ? (
        <Container style={{ width: "30px" }}>
          <Menu onClick={() => setOpen(!isOpen)} />
        </Container>
      ) : (
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
      )}
    </>
  );
}

export default Sidebar;
