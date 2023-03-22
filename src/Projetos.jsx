import React from "react";
import styled from "styled-components";
import { SessionSubtitle, SessionTitle } from "./Sobre";
import PlantaUm from "./assets/Projetos/Planta 1.png";
import ProjetosCarrosel from "./Components/ProjetosCarrosel";
const Container = styled.div`
  padding: 3.6rem;
  background-color: #92400e;
  color: #fff;
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
`;

export default function Projetos() {
  return (
    <Container>
      <SessionTitle>Projetos</SessionTitle>
      <Paragraph>
        Os projetos apresentados abaixo foram projetos utilizados para estudo e
        muitos não são de minha autoria.
      </Paragraph>
      <SessionSubtitle>Projeto 1</SessionSubtitle>
      <ProjetosCarrosel plantas={[PlantaUm]} />
    </Container>
  );
}
