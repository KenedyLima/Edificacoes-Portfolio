import React from "react";
import styled from "styled-components";

export const SessionTitle = styled.h1`
  text-transform: uppercase;
  font-family: "Roboto-Condensed-Title";
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const SessionSubtitle = styled.h2`
  font-family: "Roboto-Condensed-Title";
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
`;

const Container = styled.div`
  color: black;
  padding: 3.6rem;
  width: 60%;
  & p {
    font-size: 1.6rem;
  }
`;

const EducationList = styled.ul`
  list-style: circle;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-left: 1.6rem;
`;

export default function Sobre() {
  const age = getAge();
  return (
    <Container>
      <SessionTitle>Sobre</SessionTitle>
      <p>
        Me chamo Jeferson Kenedy, tenho {age} anos e atualmente estou cursando o
        último ano do Ensino Médio integrado ao técnico no IFBA - Instituto
        Federal da Bahia, Campus Barreiras.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam commodi,
        optio, repellat ab quae necessitatibus fugiat ipsam corrupti voluptatum
        velit sunt consequatur natus repudiandae! Quod dolorum ut accusantium
        nulla molestias?
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
        dolorem itaque minus amet repudiandae fuga quos, eius enim quae, nam
        quam non. Quisquam exercitationem officia, similique iure maiores magni
        quae.
      </p>
      <SessionSubtitle>Educação</SessionSubtitle>
      <EducationList>
        <li>
          <p>
            Ensino médio integrado ao Técnico em Edifições no IFBA - Instituto
            Federal da Bahia. (2020 - 2023)
          </p>
        </li>
        <li>
          <p>
            Bolsista em Projeto de Computação Quântica na UFOB - Universidade
            Federal do Oeste Bahiano. (2022 - 2023)
          </p>
        </li>
        <li>
          <p>Inglês Avançado</p>
        </li>
      </EducationList>
    </Container>
  );
}

function getAge() {
  const birthdate = new Date("11/05/2005");
  const now = new Date();
  let age = now.getFullYear() - birthdate.getFullYear();
  if (now.getMonth() < birthdate.getMonth()) age--;
  else if (
    now.getMonth() === birthdate.getMonth() &&
    now.getDay() < birthdate.getDay()
  )
    age--;
  return age;
}
