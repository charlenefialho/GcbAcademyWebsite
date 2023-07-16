import React, { useState, FormEvent } from "react";
import Image from "next/image";

import { Background, Container, Content, ModalHeader } from "../Modal.styles";
import xCircle from "../../../assets/svg/icon-x-circle.svg";
import emailIcon from "../../../assets/svg/email-icon.svg";
import padlockIcon from "../../../assets/svg//pad-lock-icon.svg";
import {
  IconSpan,
  InputContent,
  InputModal,
  buttonStyleModal,
} from "../Modal.styles";
import { User, WarningCircle } from "@phosphor-icons/react";
import { Button } from "../../Button/Button";
import Link from "next/link";

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
              <InputModal>
                <InputContent placeholder="Nome Completo" type="text" />
                <IconSpan>
                  <User size={24} />
                </IconSpan>
              </InputModal>

              <InputModal>
                <InputContent placeholder="E-mail" type="email" />
                <IconSpan>
                  <Image src={emailIcon} width={24} height={24} alt="" />
                </IconSpan>
              </InputModal>
              <InputModal>
                <InputContent placeholder="Senha" type="password" />
                <IconSpan>
                  <Image src={padlockIcon} width={24} height={24} alt="" />
                </IconSpan>
              </InputModal>
              <span>
                <WarningCircle size={16} />
                Mínimo de 8 caracteres, no mínimo um número e um caractere
                especial
              </span>
              <InputModal>
                <InputContent
                  placeholder="Confirmação de senha"
                  type="password"
                />
                <IconSpan>
                  <Image src={padlockIcon} width={24} height={24} alt="" />
                </IconSpan>
              </InputModal>
              <section className="useTermsCheckBox">
                <input type="checkbox" name="useTerms" id="useTerms" /> Eu li,
                concordo e aceito o <Link href="#">Termos e Condições</Link>
              </section>
              <Button content="Criar" styles={buttonStyleModal} visible />
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
