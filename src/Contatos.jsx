import React from "react";
import styled from "styled-components";
import { SessionTitle, TopicTitle } from "./Sobre";

const Container = styled.div`
  padding: 3.6rem;
  & h1 {
  }
`;

export default function Contatos() {
  return (
    <Container>
      <SessionTitle>Contatos</SessionTitle>
    </Container>
  );
}
