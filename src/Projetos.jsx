import React from "react";
import styled from "styled-components";
import { SessionSubtitle, SessionTitle } from "./Sobre";
import ProjetosCarrosel from "./Components/ProjetosCarrosel";
import P1PlantaBaixa from "./assets/Projetos/P1_planta_baixa.png";
import P1CorteAA from "./assets/Projetos/P1_corteaa.png";
import P1CorteBB from "./assets/Projetos/P1_cortebb.png";
import P1FachadaFrontal from "./assets/Projetos/P1_fachada_frontal.png";
import P1FachadaPosterior from "./assets/Projetos/P1_fachada_posterior.png";
import P1FachadaLateralD from "./assets/Projetos/P1_fachada_lateralD.png";
import P1FachadaLateralE from "./assets/Projetos/P1_fachada_lateralE.png";
import { ContainerPadding } from "./Header";

const Container = styled.div`
  ${ContainerPadding}
  background-color: #4a3d35;
  color: #fff;
  overflow-x: hidden;
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  margin-bottom: 8.2rem;
`;

const ProjetosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export default function Projetos() {
  return (
    <Container id="projetos-session">
      <SessionTitle>Projetos</SessionTitle>
      <Paragraph>
        Os projetos apresentados abaixo foram projetos utilizados para estudo e
        muitos não são de minha autoria.
      </Paragraph>

      <ProjetosCarrosel
        plantas={[
          P1PlantaBaixa,
          P1CorteAA,
          P1CorteBB,
          P1FachadaFrontal,
          P1FachadaLateralD,
          P1FachadaLateralE,
          P1FachadaPosterior,
        ]}
      />
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
