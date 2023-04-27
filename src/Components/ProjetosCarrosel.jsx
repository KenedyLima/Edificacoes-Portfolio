import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { SessionSubtitle } from "../Sobre";

const Container = styled.div`
  height: 42rem;
  width: 68rem;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const ArrowCss = css`
  position: absolute;
  top: 50%;
  z-index: 10;
  font-size: 5.8rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  color: #451a03;
  opacity: 50%;
  &:hover {
    opacity: 1;
  }
`;
const ArrowForWrapper = styled.div`
  ${ArrowCss}
  right: 0;
  transform: translate(50%, calc(-50% - 4.2rem));
  &:hover {
    transform: translate(50%, calc(-50% - 4.2rem)) scale(1.3);
  }
`;

const ArrowBackWrapper = styled.div`
  ${ArrowCss}
  transform: translate(-50%, calc(-50% - 4.2rem));
  &:hover {
    transform: translate(-50%, calc(-50% - 4.2rem)) scale(1.3);
  }
`;

const Projeto = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 300ms ease-in-out;
  border-radius: 5px;
  ${({ planta, position }) => {
    return css`
      background-image: url(${planta});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transform: translateX(${position});
      background-color: rgba(1, 1, 1, 0.2);
    `;
  }}
`;

const DotsContainer = styled.ul`
  display: flex;
  gap: 1.2rem;
  position: absolute;
  bottom: 0rem;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
`;

const Dot = styled.li`
height: 2rem;
width 2rem;
border-radius: 50px;
//border: 1px solid #451a0380;
background-color:  #fff;
transition: background-color 200ms ease-in-out;
cursor: pointer;
&.active {
    background-color: #451a03;
  }
  &:hover {
    background-color: #451a03;
  }
`;
export default function ProjetosCarrosel({ plantas }) {
  const arrowForRef = useRef();
  const arrowBackRef = useRef();
  let currentProjectId = 1;
  const setCurrentProjectId = function (id) {
    console.log("Setting current project to: ", id);
    currentProjectId = id;
  };

  const updateProjectsPosition = function () {
    const calcPosition = function (subtraction, project) {
      let css = "";

      if (subtraction === -1)
        css = `translateX(calc(${subtraction * 100}% - 3rem))`;
      else if (subtraction === 0)
        css = `translate(${subtraction * 100}%, -4.2rem)`;
      else if (subtraction === 1)
        css = `translateX(calc(${subtraction * 100}% + 3rem))`;
      else css = `translateX(${subtraction * 100}%)`;

      project.style.transform = css;
    };

    const projects = document.querySelectorAll(".projeto");
    projects.forEach((project, id) => {
      calcPosition(id - currentProjectId, project);
    });
  };

  useEffect(() => {
    updateProjectsPosition();
  }, []);

  const nextProject = async function (e) {
    if (currentProjectId + 1 === plantas.length) {
      setCurrentProjectId(0);
      updateActiveDotCss();
    } else {
      setCurrentProjectId(currentProjectId + 1);
      updateActiveDotCss();
    }
    updateProjectsPosition();
  };

  const prevProject = function () {
    if (currentProjectId === 0) {
      setCurrentProjectId(plantas.length - 1);
      updateActiveDotCss();
    } else {
      setCurrentProjectId(currentProjectId - 1);
      updateActiveDotCss();
    }
    updateProjectsPosition();
  };

  const updateActiveDotCss = function () {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, id) => {
      dot.classList.remove("active");
      if (id === currentProjectId) dot.classList.add("active");
    });
  };

  const updateCurrentProject = function (e) {
    if (!e.target.closest(".dot")) return;
    const currentProjectId = Number(e.target.getAttribute("id"));
    setCurrentProjectId(currentProjectId);
    updateActiveDotCss();
    updateProjectsPosition();
  };

  return (
    <Container>
      {plantas.map((planta, id) => {
        return (
          <Projeto
            className={`projeto ${
              id - currentProjectId === 0 ? "current" : ""
            }`}
            planta={planta}
            position={`${(id - currentProjectId) * 100}%`}
          />
        );
      })}

      <ArrowForWrapper
        onClick={() => {
          nextProject();
        }}
        ref={arrowForRef}
      >
        <ion-icon name="caret-forward-outline"></ion-icon>
      </ArrowForWrapper>
      <ArrowBackWrapper onClick={prevProject} ref={arrowBackRef}>
        <ion-icon name="caret-back-outline"></ion-icon>
      </ArrowBackWrapper>
      <DotsContainer onClick={updateCurrentProject}>
        {plantas.map((projeto, id) => {
          return (
            <Dot
              className={id === currentProjectId ? "active dot" : "dot"}
              id={id}
            ></Dot>
          );
        })}
      </DotsContainer>
    </Container>
  );
}
