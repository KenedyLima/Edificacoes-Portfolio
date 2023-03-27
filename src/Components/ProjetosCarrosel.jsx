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
  width: 52rem;
  height: 36rem;
  position: relative;
  background-color: red;
  margin-top: 3rem;
  & .planta.current {
    display: block;
    transform: translateY(-2rem);
  }
`;

const ArrowCss = css`
  position: absolute;
  top: 50%;
  z-index: 10;
  font-size: 3.6rem;
`;
const ArrowForWrapper = styled.div`
  ${ArrowCss}
  right: 0;
  transform: translate(50%, calc(-50% - 2rem));
`;

const ArrowBackWrapper = styled.div`
  ${ArrowCss}
  transform: translate(-50%, calc(-50% - 2rem));
`;
export default function ProjetosCarrosel({ numeroProjeto, plantas }) {
  /*<ion-icon
    className="arrow arrow-back"
    name="arrow-back-circle-outline"
  ></ion-icon>;*/
  let [currentPlanta, setCurrentPLanta] = useState(0);
  const plantasWrapperRef = useRef();
  /*useEffect(() => {
    const plantasEl = plantasWrapperRef.current.querySelectorAll(".planta");
    console.log(plantasEl.length);
    if (plantasEl.length >= 3) {
      setCurrentPLanta(1);
      plantasEl.forEach((el, index) => {
        if (index === 0) el.style.transform = "translateX(-100%)";
        if (index > 1) el.style.transform = `translateX(${(index - 1) * 100}%)`;
      });
    }
  }, []);
*/
  const nextPlanta = function () {
    const plantasEl = plantasWrapperRef.current.querySelectorAll(".planta");
    plantasEl.forEach((planta) => {});
  };

  return; /*(
    <Container>
      <SessionSubtitle>{numeroProjeto}</SessionSubtitle>
      <PlantasWrapper ref={plantasWrapperRef}>
        <ArrowBackWrapper>
          <ion-icon
            className="arrow arrow-back"
            name="arrow-back-circle-outline"
          ></ion-icon>
        </ArrowBackWrapper>
        {plantas.map((planta, index) => {
          return (
            <PlantaContainer
              className={index === 1 ? "planta current" : "planta"}
              key={index}
              img={planta}
            />
          );
        })}
        <ArrowForWrapper>
          <ion-icon
            className="arrow arrow-back"
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </ArrowForWrapper>
      </PlantasWrapper>
    </Container>
  );*/
}
