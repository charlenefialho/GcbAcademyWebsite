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

export interface Modal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export function LoginModal({ isOpen, setOpen }: Modal) {
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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

            <form onSubmit={handleSubmit}>
              <S.InputModal>
                <S.InputContent placeholder="E-mail" type="email" />
                <S.IconSpan>
                  <Image src={emailIcon} width={24} height={24} alt="" />
                </S.IconSpan>
              </S.InputModal>
              <S.InputModal>
                <S.InputContent placeholder="Senha" type="password" />
                <S.IconSpan>
                  <Image src={padlockIcon} width={24} height={24} alt="" />
                </S.IconSpan>
              </S.InputModal>
              <section className="useTermsCheckBox">
                <input type="checkbox" name="useTerms" id="useTerms" /> Lembra
                minha conta
              </section>
              <Button content="Criar" styles={S.buttonStyleModal} visible />
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
