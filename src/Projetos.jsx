import React from "react";
import styled from "styled-components";
import { SessionSubtitle, SessionTitle } from "./Sobre";
import PlantaUm from "./assets/Projetos/Projeto.png";
import ProjetosCarrosel from "./Components/ProjetosCarrosel";
const Container = styled.div`
  padding: 3.6rem;
  background-color: #1d0d03;
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

      <ProjetosCarrosel
        numeroProjeto="Projeto 1"
        plantas={[PlantaUm, PlantaUm, PlantaUm]}
      />

      <ProjetosCarrosel
        numeroProjeto="Projeto 2"
        plantas={[PlantaUm, PlantaUm, PlantaUm, PlantaUm]}
      />

      <ProjetosCarrosel
        numeroProjeto="Projeto 3"
        plantas={[PlantaUm, PlantaUm, PlantaUm]}
      />
    </Container>
  );
}
