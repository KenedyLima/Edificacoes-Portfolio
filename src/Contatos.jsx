import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { LinkCss, SessionTitle, TopicTitle } from "./Sobre";

const InputLabelCss = css`
  font-size: 1.4rem;
  & textarea {
    font-size: 1.4rem;
  }
`;
const Container = styled.div`
  padding: 7.2rem 7.2rem 4.8rem 7.2rem;
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
    background-color: #4a3d35;
    color: #fff;
    border: #fff solid 1px;
  }

  & .mensagem {
    max-width: 100%;
    min-height: 10rem;
    max-height: 10rem;
    padding: 0.6rem 1.2rem;
    font-family: Roboto-Condensed-Regular;
    ${InputLabelCss};
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
  width: 70vw;
  row-gap: 2rem;
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

const SocialWrapper = styled.div`
  ${LinkCss}
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3rem;
  & a:link,
  a:active {
    font-size: 1.4rem;
    gap: 0.6rem;
    display: inline-block;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & [name="logo-whatsapp"] {
    font-size: 3rem;
    color: green;
  }
`;
export default function Contatos() {
  const formRef = useRef();

  const sendEmail = async function (e) {
    e.preventDefault();

    const nome = formRef.current.querySelector(".nome").value;
    const email = formRef.current.querySelector(".email").value;
    const mensagem = formRef.current.querySelector(".mensagem").value;
    formRef.current.querySelector(".nome").value = "";
    formRef.current.querySelector(".email").value = "";
    formRef.current.querySelector(".mensagem").value = "";
    const res = await fetch("/sendEmail", {
      method: "POST",
      body: new URLSearchParams({
        nome: nome,
        email: email,
        mensagem: mensagem,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const status = await res.text();

    if (status === "OK") alert("Email enviado!");
    else
      alert(
        "Não foi possível enviar o Email. Tente novamente mais tarde ou use outro meio de contato."
      );
  };

  return (
    <Container id="contatos-session">
      <SessionTitle>Contatos</SessionTitle>
      <SocialWrapper>
        <a target="_blank" href="https://wa.me/+5577981324172">
          <ion-icon className="social-icon" name="logo-whatsapp"></ion-icon>
          <span>Whatsapp</span>
        </a>
      </SocialWrapper>
      <FormWrapper>
        <FormH1>envie-me um email</FormH1>
        <Form ref={formRef} onSubmit={sendEmail}>
          <InputLabelWrapper>
            <Label htmlFor="email-retorno">Email</Label>
            <Input name="email-retorno" className="email" type="text" />
          </InputLabelWrapper>
          <InputLabelWrapper>
            <Label htmlFor="nome">Nome</Label>
            <Input name="nome" className="nome" type="text" />
          </InputLabelWrapper>
          <InputLabelWrapper>
            <Label htmlFor="mensagem">mensagem</Label>

            <textarea name="mensagem" className="mensagem"></textarea>
          </InputLabelWrapper>
          <Input type="submit" className="submit-button" />
        </Form>
        <FormImage />
      </FormWrapper>
    </Container>
  );
}
