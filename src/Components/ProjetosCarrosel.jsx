import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { SessionSubtitle } from "../Sobre";

const Container = styled.div``;

const PlantaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${({ img }) => {
    return css`
      background-image: url(${img});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    `;
  }}
`;

const PlantasWrapper = styled.div`
  width: 50rem;
  height: 36rem;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 3rem;
  & .planta.current {
    display: block;
    transform: translateY(-2rem);
  }
`;

const ArrowCss = css`
  position: absolute;
  top: 50%;
  color: green;
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
export default function ProjetosCarrosel({ numeroProjeto, plantas }) {
  /*<ion-icon
    className="arrow arrow-back"
    name="arrow-back-circle-outline"
  ></ion-icon>;*/
  let currentPlanta = 0;
  useEffect(() => {
    const plantasEl = document.querySelectorAll(".planta");
    if (plantasEl.length >= 3) {
      currentPlanta = 1;
      plantasEl.forEach((el, index) => {
        if (index === 0) el.style.transform = "translateX(-100%)";
        if (index > 1) el.style.transform = `translateX(${(index - 1) * 100}%)`;
      });
    }
  }, []);

  return (
    <Container>
      <SessionSubtitle>{numeroProjeto}</SessionSubtitle>
      <PlantasWrapper>
        {plantas.map((planta, index) => {
          return (
            <PlantaContainer
              className={index === 1 ? "planta current" : "planta"}
              key={index}
              img={planta}
            />
          );
        })}
      </PlantasWrapper>
    </Container>
  );
}
