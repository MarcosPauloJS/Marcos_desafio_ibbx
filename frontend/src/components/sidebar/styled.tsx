import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const Container = styled.div`
  width: 30vw;
  max-width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #fff;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100vw;
    max-width: none;
    height: 100vh;
    position: absolute;
  }
`;

export const ContainerMobile = styled(Container)`
  display: block;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.color.primary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navbar = styled.nav`
  margin-top: 24px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.color.textDark};

  &:hover {
    color: ${(props) => props.theme.color.secondary};
  }

  &.active {
    color: ${(props) => props.theme.color.secondary};
  }

  > svg {
    width: 25px;
    height: 19px;
  }
`;

export const Menu = styled(FaBars)`
  cursor: pointer;
`;

export const MenuMobile = styled(Menu)`
  position: absolute;
  top: 28px;
  left: 24px;
  display: none;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
  }
`;
