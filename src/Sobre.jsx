import React, { useRef } from "react";
import styled, { css } from "styled-components";
import photo from "./assets/me.jpg";
import location from "./assets/icons/location.png";
import id from "./assets/icons/id-card.png";
import clock from "./assets/icons/clock.png";
import { ContainerPadding } from "./Header";

export const LinkCss = css`
  & a:link,
  a:visited {
    color: #111827;
    text-decoration: none;
    border-bottom: 1px solid #111827;
    transition: all 300ms ease-in-out;
  }

  & a:hover,
  a:active {
    color: #451a03;
    border-color: transparent;
  }
`;

const EducacaoLista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-left: 2rem;
  color: #451a03;
  & span {
    color: #111827;
  }
  ${LinkCss}
`;

const ListaHabilidades = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 0.6rem;
  margin-left: 2rem;
  margin-top: 0.8rem;
  color: #451a03;
  & span {
    color: #111827;
  }
`;

export const SessionTitle = styled.h1`
  text-transform: uppercase;
  font-family: "Roboto-Condensed-Title";
  font-size: 3rem;
  margin-bottom: 1.6rem;
  grid-column: 1/-1;
  grid-row: 1/2;
`;

export const SessionSubtitle = styled.h2`
  font-family: "Roboto-Condensed-Title";
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
`;

const Container = styled.div`
  ${ContainerPadding}
  paddint-top: 4.8rem;
  & h1 {
    margin-bottom: 3rem;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 20.4rem calc(20.4rem * 3);
  column-gap: 7.2rem;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    column-gap: 3.6rem;
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: calc(3 * 20.4rem);
    row-gap: 3.6rem;
    justify-items: center;
  }
`;

const ProfileCard = styled.div`
  width: 100%;
  padding: 2rem 2rem 4.2rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0rem 8px 10px rgba(1, 1, 1, 0.19);
  justify-content: center;
  border-radius: 10px;
  gap: 1.6rem;
  @media only screen and (max-width: 500px) {
    width: 20.4rem;
  }
`;

const CardInfoLi = styled.ul`
  list-style: none;
  font-size: 1.6rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  & .icon {
    width: 1.6rem;
    height: 1.6rem;
  }

  & li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

const MoreInfoCard = styled.div`
  box-shadow: 0rem 8px 10px rgba(1, 1, 1, 0.19);
  border: 1px solid rgba(1, 1, 1, 0.19);
  position: relative;
  grid-row: 2/3;
  grid-column: 1/-1;
  padding: 3rem;
  font-size: 1.6rem;
  min-height: 24rem;
  & p {
    margin-bottom: 1.2rem;
  }
  @media only screen and (max-width: 500px) {
  }
`;

const MoreInfoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  grid-template-rows: min-content 1fr;
`;

const Button = styled.button`
  padding: 1.2rem 3.2rem;
  box-shadow: none;
  border: none;
  background-color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  &.active {
    border-top: 2px solid #451a03;
    border-right: 1px solid rgba(1, 1, 1, 0.19);
    border-left: 1px solid rgba(1, 1, 1, 0.19);
    color: #451a03;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 2px;
      background-color: white;
      z-index: 10;
    }
  }
 
  }
`;

const PhotoContainer = styled.div`
  width: 15rem;
  height: 18rem;
  align-self: center;
  border-radius: 10px;
  ${({ photo }) => css`
    background-image: url(${photo});
    background-size: cover;
  `};
`;

const TabCss = css`
  display: none;
  &.current-tab {
    display: block;
  }
`;
const SobreTab = styled.div`
  ${TabCss}
`;
const EducacaoTab = styled.div`
  ${TabCss}
`;
export default function Sobre() {
  const cardRef = useRef();
  const changeTab = function (e) {
    if (!e.target.closest(".info-button")) return;
    const buttons = document.querySelectorAll(".info-button");
    buttons.forEach((button, id) => {
      button.classList.remove("active");
      if (button === e.target.closest(".info-button")) {
        button.classList.add("active");
        updateContent(id);
      }
    });
  };

  const updateContent = function (id) {
    cardRef.current.querySelectorAll(".tab").forEach((tab, tabId) => {
      tab.classList.remove("current-tab");
      if (tabId === id) tab.classList.add("current-tab");
    });
  };

  return (
    <Container id="sobre-session">
      <SessionTitle>Me conheça</SessionTitle>
      <InfoWrapper>
        <ProfileCard>
          <PhotoContainer photo={photo}></PhotoContainer>
          <CardInfoLi>
            <li>
              {" "}
              <img src={id} className="icon" alt="" /> kenedy lima
            </li>
            <li>
              <img src={location} className="icon" alt="" /> barreiras, ba
            </li>
            <li>
              <img src={clock} alt="" className="icon" /> {getAge()} anos
            </li>
          </CardInfoLi>
        </ProfileCard>
        <MoreInfoGrid>
          <Button onClick={changeTab} className="active info-button">
            Sobre
          </Button>
          <Button onClick={changeTab} className="info-button">
            Educação
          </Button>
          <MoreInfoCard ref={cardRef}>
            <SobreTab className="current-tab tab">
              <p>
                À procura de atuar na área da engenharia civil como técnico em edificações
              </p>
              <p>
                Possuo algumas habilidades importantes e que com certeza podem
                favorecer e contribuir à sua empresa:
              </p>
              <ListaHabilidades>
                <li>
                  <span>Autodidata</span>
                </li>
                <li>
                  <span>Participativo</span>
                </li>
                <li>
                  <span>Comunicativo</span>
                </li>
                <li>
                  <span>Produtivo</span>
                </li>
                <li>
                  <span>Rápido aprendizado</span>
                </li>
                <li>
                  <span>AutoCAD</span>
                </li>
              </ListaHabilidades>
            </SobreTab>
            <EducacaoTab className="tab">
              <EducacaoLista>
                <li>
                  <span>
                    Ensino médio e técnico - IFBA
                    (2020 - 2023)
                  </span>
                </li>
                <li>
                  <span>
                    Bolsista de PIBIC em mecânica quântica - UFOB (2022 - 2023).
                  </span>
                </li>
                <li>
                  <span>Inglês Fluente</span>
                </li>
                <li>
                  <span>
                    Possuo muita afinidade e conhecimento na área de TI.{" "}
                  </span>
                  <a
                    target="_blank"
                    href="https://kenedylima.github.io/Portfolio/"
                  >
                    Saiba mais!
                  </a>
                </li>
              </EducacaoLista>
            </EducacaoTab>
          </MoreInfoCard>
        </MoreInfoGrid>
      </InfoWrapper>
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
