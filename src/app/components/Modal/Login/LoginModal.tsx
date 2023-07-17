"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import * as S from "../Modal.styles";
import xCircle from "../../../assets/svg/icon-x-circle.svg";
import emailIcon from "../../../assets/svg/email-icon.svg";
import padlockIcon from "../../../assets/svg//pad-lock-icon.svg";
import { Background, Container, Content, ModalHeader } from "../Modal.styles";
import { Button } from "../../Button/Button";
import { RegisterModal } from "../Register/RegisterModal";
import { login } from "../../../../../utils/firebase/authService";

export interface Modal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export function LoginModal({ isOpen, setOpen }: Modal) {
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form  = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement;

    login(emailInput.value, passwordInput.value).then((user) => console.log(user)).catch((err) => console.log(err));
  };

  if (isOpen) {
    return (
      <Background>
        <Container>
          <Content>
            <ModalHeader>
              <h4>Entrar</h4>
              <button onClick={() => setOpen(!isOpen)}>
                <Image src={xCircle} alt="" />
              </button>
            </ModalHeader>
            <p className="SubText">
              Entre na sua conta para continuar o processo
            </p>

            <form onSubmit={handlerLogin}>
              <S.InputModal>
                <S.InputContent placeholder="E-mail" type="email" id="email"/>
                <S.IconSpan>
                  <Image src={emailIcon} width={24} height={24} alt="" />
                </S.IconSpan>
              </S.InputModal>
              <S.InputModal>
                <S.InputContent placeholder="Senha" type="password" id="password"/>
                <S.IconSpan>
                  <Image src={padlockIcon} width={24} height={24} alt="" />
                </S.IconSpan>
              </S.InputModal>
              <section className="useTermsCheckBox">
                <input type="checkbox" name="useTerms" id="useTerms" /> Lembra
                minha conta
              </section>
              <Button type="submit" content="Criar" styles={S.buttonStyleModal} visible />
            </form>

            <div className="divTextQuestion">
              <span className="textQuestion">
                Não tem uma conta?{" "}
                <Link href="#" onClick={() => setModalRegisterOpen(!modalRegisterOpen)} className="linkTextQuestion">
                  Cadastrar
                </Link>
              </span>
            </div>

            <RegisterModal isOpen={modalRegisterOpen} setOpen={setModalRegisterOpen} />
          </Content>
        </Container>
      </Background>
    );
  }
}
