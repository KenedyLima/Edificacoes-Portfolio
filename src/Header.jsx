import React from "react";
import styled from "styled-components";
import helmet from "./assets/helmet.png";
import pattern from "./assets/pattern.jpg";
import VoltarTopoButton from "./Components/VoltarTopoButton";
const Container = styled.div`
  position: relative;
  height: 100vh;
  padding: 3.6rem 4.8rem;
  background-image: linear-gradient(180deg, #ffffff00, #ffffffe0),
    url(${pattern});
  background-position: center;
  background-size: cover;
  background-color: #78350f;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 5rem 1fr;
  height: 100%;
  align-items: center;
`;

const NavigationBar = styled.nav``;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3.6rem;
  list-style: none;
`;

const NavItem = styled.li`
  font-size: 1.8rem;
  cursor: pointer;
  text-transform: capitalize;
  & a:link,
  a:visited {
    transition: all 300ms ease-in-out;
    text-decoration: none;
    color: #000;
  }

  & a:hover,
  a:active {
    color: #ae866f;
  }
`;

const Icon = styled.div`
  background-image: url(${helmet});
  background-size: cover;
  background-position: center;
  width: 3.6rem;
  height: 3.6rem;
`;

const HeaderText = styled.div`
  grid-column: 1/3;
  font-size: 5.6rem;
  font-family: "Roboto-Condensed-Title";
  margin-left: 3rem;
  text-transform: uppercase;
`;
export default function Header() {
  return (
    <Container>
      <GridContainer>
        <Icon></Icon>
        <NavigationBar>
          <NavList>
            <NavItem>
              <a href="#sobre-session">Sobre</a>
            </NavItem>
            <NavItem>
              <a href="#projetos-session">projetos</a>
            </NavItem>
            <NavItem>
              <a href="#contatos-session">contatos</a>
            </NavItem>
          </NavList>
        </NavigationBar>
        <HeaderText>
          Técnico em
          <br /> Edificações
        </HeaderText>
      </GridContainer>
      <VoltarTopoButton />
    </Container>
  );
}
