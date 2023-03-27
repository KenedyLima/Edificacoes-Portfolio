import React from "react";
import styled from "styled-components";
import { SessionSubtitle, SessionTitle } from "./Sobre";
import PlantaUm from "./assets/Projetos/Projeto.png";
import ProjetosCarrosel from "./Components/ProjetosCarrosel";
import Gallery from "./Components/Gallery";
const Container = styled.div`
  padding: 4.8rem;
  //background-color: #1d0d03;
  background-color: #4a3d35;
  color: #fff;
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;
`;

const ProjetosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export default function Projetos() {
  return (
    <Container>
      <SessionTitle>Projetos</SessionTitle>
      <Paragraph>
        Os projetos apresentados abaixo foram projetos utilizados para estudo e
        muitos não são de minha autoria.
      </Paragraph>

      <Gallery />
    </Container>
  );
}

/*<ProjetosContainer>
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
  </ProjetosContainer>;*/
