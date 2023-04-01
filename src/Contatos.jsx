import React from "react";
import styled, { css } from "styled-components";
import { SessionTitle, TopicTitle } from "./Sobre";
import Building from "./assets/building.png";

const InputLabelCss = css`
  font-size: 1.4rem;
`;
const Container = styled.div`
  padding: 4.8rem;
  & h1 {
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3.6rem;
  & .submit-button {
    margin-top: 2rem;
    font-weight: 600;
    cursor: pointer;
    border: transparent solid 1px;
    transition: all 300ms;
  }

  & .submit-button:hover {
    background-color: #1d0d03;
    color: #fff;
    border: #fff solid 1px;
  }

  & .mensagem-input {
    max-width: 100%;
    min-height: 10rem;
    max-height: 10rem;
    padding: 0.6rem 1.2rem;
    ${InputLabelCss}
  }
`;

const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Input = styled.input`
  ${InputLabelCss}
  padding: .6rem 1.2rem;
`;

const Label = styled.label`
  text-transform: uppercase;
  ${InputLabelCss}
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-template-rows: 5rem 1fr;
  width: 70%;
  row-gap: 2rem;
  //background-color: #1d0d03;
  background-color: #4a3d35;
  color: white;
  border-radius: 10px;
`;

const FormImage = styled.div`
  background-image: url("https://img.freepik.com/premium-photo/luxury-house-architecture-drawing-sketch-plan-blueprint_691560-6473.jpg?w=2000");
  background-size: cover;
  background-position: center;
  grid-row: 1/-1;
  grid-column: 2/-1;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const FormH1 = styled.h1`
  text-transform: uppercase;
  grid-column: 1/2;
  text-align: center;
  font-size: 2.4rem;
  margin-top: 3.6rem;
  letter-spacing: 1.5px;
`;
export default function Contatos() {
  return (
    <Container id="contatos-session">
      <SessionTitle>Contatos</SessionTitle>
      <FormWrapper>
        <FormH1>envie-me um email</FormH1>
        <Form>
          <InputLabelWrapper>
            <Label htmlFor="email-retorno">Email</Label>
            <Input
              name="email-retorno"
              type="text"
              placeholder="Seu email para retorno..."
            />
          </InputLabelWrapper>
          <InputLabelWrapper>
            <Label htmlFor="nome">Nome</Label>
            <Input name="nome" type="text" placeholder="Seu nome..." />
          </InputLabelWrapper>
          <InputLabelWrapper>
            <Label htmlFor="mensagem">mensagem</Label>
            <textarea
              placeholder="Sua mensagem..."
              className="mensagem-input"
            ></textarea>
          </InputLabelWrapper>
          <Input type="submit" className="submit-button" />
        </Form>
        <FormImage />
      </FormWrapper>
    </Container>
  );
}
