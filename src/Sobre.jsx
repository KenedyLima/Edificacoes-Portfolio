import React from "react";
import styled from "styled-components";
import photo from "./assets/myself2.jpg";

export const SessionTitle = styled.h1`
  text-transform: uppercase;
  font-family: "Roboto-Condensed-Title";
  font-size: 3rem;
  margin-bottom: 1.6rem;
`;

export const SessionSubtitle = styled.h2`
  font-family: "Roboto-Condensed-Title";
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
`;

const Container = styled.div`
  color: black;
  padding: 4.8rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const PhotoContainer = styled.div`
  background-image: url(${photo});
  background-position: center;
  background-size: cover;

  height: auto;
  width: 36rem;
  border-radius: 10px;
`;

export default function Sobre() {
  const age = getAge();
  return (
    <Container id="sobre-session">
      <PhotoContainer />
      <div>
        <SessionTitle>Sobre</SessionTitle>
        <p>
          Me chamo Jeferson Kenedy, tenho {age} anos e atualmente estou cursando
          o último ano do Ensino Médio integrado ao técnico no IFBA - Instituto
          Federal da Bahia, Campus Barreiras.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          commodi, optio, repellat ab quae necessitatibus fugiat ipsam corrupti
          voluptatum velit sunt consequatur natus repudiandae! Quod dolorum ut
          accusantium nulla molestias?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          dolorem itaque minus amet repudiandae fuga quos, eius enim quae, nam
          quam non. Quisquam exercitationem officia, similique iure maiores
          magni quae.
        </p>
      </div>
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
/*
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
            Federal do Oeste da Bahia. (2022 - 2023)
          </p>
        </li>
        <li>
          <p>Inglês Avançado</p>
        </li>
      </EducationList>*/
