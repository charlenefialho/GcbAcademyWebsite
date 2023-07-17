"use client";

import React, { useState, FormEvent } from "react";
import { User, WarningCircle } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

import * as S from "../Modal.styles";
import xCircle from "../../../assets/svg/icon-x-circle.svg";
import emailIcon from "../../../assets/svg/email-icon.svg";
import padlockIcon from "../../../assets/svg//pad-lock-icon.svg";
import { Background, Container, Content, ModalHeader } from "../Modal.styles";
import { Button } from "../../Button/Button";

export interface Modal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export function RegisterModal({ isOpen, setOpen }: Modal) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  if (isOpen) {
    return (
      <Background>
        <Container>
          <Content>
            <ModalHeader>
              <h4>Registrar</h4>
              <button onClick={() => setOpen(!isOpen)}>
                <Image src={xCircle} alt="" />
              </button>
            </ModalHeader>
            <form onSubmit={handleSubmit}>
              <S.InputModal>
                <S.InputContent placeholder="Nome Completo" type="text" />
                <S.IconSpan>
                  <User size={24} />
                </S.IconSpan>
              </S.InputModal>

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
              <span>
                <WarningCircle size={16} />
                Mínimo de 8 caracteres, no mínimo um número e um caractere
                especial
              </span>
              <S.InputModal>
                <S.InputContent
                  placeholder="Confirmação de senha"
                  type="password"
                />
                <S.IconSpan>
                  <Image src={padlockIcon} width={24} height={24} alt="" />
                </S.IconSpan>
              </S.InputModal>
              <section className="useTermsCheckBox">
                <input type="checkbox" name="useTerms" id="useTerms" /> Eu li,
                concordo e aceito o <Link href="#">Termos e Condições</Link>
              </section>
              <Button content="Criar" styles={S.buttonStyleModal} visible />
            </form>

            <div className="divTextQuestion">
              <span className="textQuestion">
                Já tem uma conta?{" "}
                <Link href="#" className="linkTextQuestion">
                  Entrar
                </Link>
              </span>
            </div>
          </Content>
        </Container>
      </Background>
    );
  }
}
