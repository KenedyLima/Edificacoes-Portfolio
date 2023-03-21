import React from "react";
import styled from "styled-components";
import { SessionSubtitle, SessionTitle } from "./Sobre";

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
    </Container>
  );
}
