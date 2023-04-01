import React from "react";
import styled from "styled-components";
import PlantaUm from "./../assets/Projetos/Projeto.png";
import Corte from "./../assets/Projetos/corte bb.png";
import Locacao from "./../assets/Projetos/new.png";
import Fachada from "./../assets/Projetos/Fachada.png";

const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border: 2px solid black;
  object-fit: cover;
  transition: all 300ms;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    transform: scale(1.2);
  }

  &::before {
    content: "Download";
    height: 3rem;
    width: 3rem;
    top: 0;
    left: 0;
    background-color: red;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function Gallery() {
  return (
    <Container>
      <ImageContainer>
        <Image id="planta-5" src={Locacao} />
        <Image id="planta-4" src={Corte} />
        <Image id="planta-2" src={Fachada} />
      </ImageContainer>
      <ImageContainer>
        <Image id="planta-1" src={PlantaUm} />
        <Image id="planta-3" src={PlantaUm} />
        <Image id="planta-6" src={Corte} />
      </ImageContainer>
      <ImageContainer>
        <Image id="planta-6" src={Corte} />
        <Image id="planta-5" src={Locacao} />

        <Image id="planta-2" src={Fachada} />
      </ImageContainer>
    </Container>
  );
}
