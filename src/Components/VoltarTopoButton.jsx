import React from "react";
import styled from "styled-components";

const Button = styled.button`
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  position: fixed;
  border: none;
  bottom: 1rem;
  right: 1rem;
  height: 4.2rem;
  width: 4.2rem;
  border-radius: 50px;
  cursor: pointer;
  z-index: 20;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  @media only screen and (max-width: 700px) {
    right: 2rem;
    bottom: 2rem;
`;

export default function VoltarTopoButton() {
  const onClick = function () {
    window.scroll(0, 0);
  };
  return (
    <Button onClick={onClick}>
      <ion-icon name="chevron-up-outline"></ion-icon>
    </Button>
  );
}
