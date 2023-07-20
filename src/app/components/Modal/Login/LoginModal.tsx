"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as fireBase from "firebase/auth";

import * as S from "../Modal.styles";
import xCircle from "../../../assets/svg/icon-x-circle.svg";
import emailIcon from "../../../assets/svg/email-icon.svg";
import padlockIcon from "../../../assets/svg/pad-lock-icon.svg";
import { Background, Container, Content, ModalHeader } from "../Modal.styles";
import { Button } from "../../Button/Button";
import { RegisterModal } from "../Register/RegisterModal";
import { login } from "../../../../../utils/firebase/authService";

export interface LoginModal {
  isLoginOpen: boolean;
  setLoginOpen: (isLoginOpen: boolean) => void;
}

interface UserLogin {
  email: string;
  password: string;
}

const loginFormValidationSchema = zod.object({
  email: zod
    .string()
    .nonempty("Insira o email")
    .email("Informe um e-mail válido"),
  password: zod.string().nonempty("Insira a senha"),
});

type loginUserData = zod.infer<typeof loginFormValidationSchema>;

export function LoginModal({ isLoginOpen, setLoginOpen }: LoginModal) {
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginUserData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmitLogin(data: UserLogin) {
    try {
      const user = await login(data.email, data.password);
      setLoginError("");
      reset();
      setLoginOpen(!isLoginOpen);
      toast.success(
        `Logado com sucesso. Bem vindo ${user.user.displayName?.toString()}`
      );
    } catch (error) {
      const firebaseError = error as fireBase.AuthError;
      if (
        firebaseError.code === "auth/user-not-found" ||
        firebaseError.code === "auth/wrong-password"
      ) {
        setLoginError("E-mail ou senha inválidos.");
      } else {
        setLoginError("Ocorreu um erro no login. Por favor, tente novamente.");
      }
    }
  }

  if (isLoginOpen) {
    return (
      <Background>
        <Container>
          <Content>
            <ModalHeader>
              <h4>Entrar</h4>
              <button onClick={() => setLoginOpen(!isLoginOpen)}>
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
              {loginError && <p style={{ color: "#ff0000" }}>{loginError}</p>}
              <section className="useTermsCheckBox">
                <input type="checkbox" name="useTerms" id="useTerms" /> Lembra
                minha conta
              </section>
              <Button
                type="submit"
                content="Entrar"
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
                  Registre-se
                </Link>
              </span>
            </div>

            <RegisterModal
              isRegisterOpen={modalRegisterOpen}
              setRegisterOpen={setModalRegisterOpen}
            />
          </Content>
        </Container>
      </Background>
    );
  }
}
