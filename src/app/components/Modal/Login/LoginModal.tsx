"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as S from "../Modal.styles";
import xCircle from "../../../assets/svg/icon-x-circle.svg";
import emailIcon from "../../../assets/svg/email-icon.svg";
import padlockIcon from "../../../assets/svg//pad-lock-icon.svg";
import { Background, Container, Content, ModalHeader } from "../Modal.styles";
import { Button } from "../../Button/Button";
import { RegisterModal } from "../Register/RegisterModal";
import { login } from "../../../../../utils/firebase/authService";
import { errorToJSON } from "next/dist/server/render";

export interface Modal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

interface UserLogin {
  email: string,
  password: string
}

const loginFormValidationSchema = zod.object({
  email: zod
    .string()
    .nonempty("Insira o email")
    .email("Informe um e-mail válido"),
  password: zod.string().nonempty("Insira a senha")
});

type loginUserData = zod.infer<typeof loginFormValidationSchema>;

export function LoginModal({ isOpen, setOpen }: Modal) {
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUserData>({
    resolver: zodResolver(loginFormValidationSchema),
  });

  function handleSubmitLogin(data: UserLogin) {
    
  }

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

            <form onSubmit={handleSubmit(handleSubmitLogin)}>
              <S.InputModal>
                <S.InputContent
                  placeholder="E-mail"
                  type="text"
                  id="email"
                  {...register("email")}
                />
                <S.IconSpan>
                  <Image src={emailIcon} width={24} height={24} alt="" />
                </S.IconSpan>
              </S.InputModal>
              {errors.email && (
                <span style={{ color: "#ff0000" }}>{errors.email.message}</span>
              )}
              <S.InputModal>
                <S.InputContent
                  placeholder="Senha"
                  type="password"
                  id="password"
                  {...register("password")}
                />
                <S.IconSpan>
                  <Image src={padlockIcon} width={24} height={24} alt="" />
                </S.IconSpan>
              </S.InputModal>
              {errors.password && (
                <span style={{ color: "#ff0000" }}>
                  {errors.password.message}
                </span>
              )}
              <section className="useTermsCheckBox">
                <input type="checkbox" name="useTerms" id="useTerms" /> Lembra
                minha conta
              </section>
              <Button
                type="submit"
                content="Criar"
                styles={S.buttonStyleModal}
                visible
              />
            </form>

            <div className="divTextQuestion">
              <span className="textQuestion">
                Não tem uma conta?{" "}
                <Link
                  href="#"
                  onClick={() => setModalRegisterOpen(!modalRegisterOpen)}
                  className="linkTextQuestion"
                >
                  Cadastrar
                </Link>
              </span>
            </div>

            <RegisterModal
              isOpen={modalRegisterOpen}
              setOpen={setModalRegisterOpen}
            />
          </Content>
        </Container>
      </Background>
    );
  }
}
