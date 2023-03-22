import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 60%;
  height: 40rem;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const ArrowCss = css`
  position: absolute;
  top: 50%;
  font-size: 4.8rem;
  color: #78350f;
`;

const PlantaContainer = styled.div`
  ${({ planta }) => css`
    background-image: url(${planta});
    background-repeat: no-repeat;
  `}
  width: 100%;
  height: 100%;
  transform: rotate(90deg);
`;

const ArrowForWrapper = styled.div`
  ${ArrowCss}
  right: 0;
  transform: translate(50%, -50%);
`;

const ArrowBackWrapper = styled.div`
  ${ArrowCss}
  transform: translate(-50%, -50%);
`;
export default function ProjetosCarrosel({ plantas }) {
  return (
    <Container>
      <ArrowBackWrapper>
        <ion-icon
          className="arrow arrow-back"
          name="arrow-back-circle-outline"
        ></ion-icon>
      </ArrowBackWrapper>
      <ArrowForWrapper>
        <ion-icon
          className="arrow arrow-for"
          name="arrow-forward-circle-outline"
        ></ion-icon>
      </ArrowForWrapper>
      {plantas.map((planta, index) => {
        return <PlantaContainer key={index} planta={planta}></PlantaContainer>;
      })}
    </Container>
  );
}
