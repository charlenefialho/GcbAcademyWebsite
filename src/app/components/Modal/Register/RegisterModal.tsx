"use client";

import React from "react";
import { toast } from "react-toastify";
import { User, WarningCircle } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as fireBase from "firebase/auth";

import * as S from "../Modal.styles";
import xCircle from "../../../assets/svg/icon-x-circle.svg";
import emailIcon from "../../../assets/svg/email-icon.svg";
import padlockIcon from "../../../assets/svg//pad-lock-icon.svg";
import { Background, Container, Content, ModalHeader } from "../Modal.styles";
import { Button } from "../../Button/Button";
import { userRegister } from "../../../../../utils/firebase/authService";

interface RegisterModal {
  isRegisterOpen: boolean;
  setRegisterOpen: (isRegisterOpen: boolean) => void;
}

interface UserRegister {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerFormValidationSchema = zod
  .object({
    userName: zod.string().nonempty("O nome é obrigatório"),
    email: zod
      .string()
      .min(1, "Informe o e-mail")
      .email("Informe um e-mail válido"),
    password: zod
      .string({
        required_error: "Campo de senha é obrigatório",
      })
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(
        /^(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/,
        "A senha deve conter no mínimo um número e um caractere especial"
      ),
    confirmPassword: zod.string(),
  })
  .refine(
    (data: UserRegister) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "As senhas devem coincidir",
      path: ["confirmPassword"],
    }
  );
type registerUserData = zod.infer<typeof registerFormValidationSchema>;

export function RegisterModal({
  isRegisterOpen,
  setRegisterOpen,
}: RegisterModal) {
  async function handleSubmitUserRegister(data: UserRegister) {
    try {
      const user = await userRegister({
        name: data.userName,
        email: data.email,
        password: data.password,
      });
      toast.success(`Registrado com sucesso. Efetue o Login`);
      reset();
      setRegisterOpen(!isRegisterOpen);
    } catch (error) {
      const firebaseError = error as fireBase.AuthError;
      if (firebaseError.code === "auth/email-already-in-use") {
        toast.error(
          "Este email já está em uso. Por favor, utilize outro endereço de email."
        );
      } else {
        toast.error("Ocorreu um erro. Por favor, tente novamente.");
      }
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<registerUserData>({
    resolver: zodResolver(registerFormValidationSchema),
  });

  if (isRegisterOpen) {
    return (
      <Background>
        <Container>
          <Content>
            <ModalHeader>
              <h4>Registrar</h4>
              <button onClick={() => setRegisterOpen(!isRegisterOpen)}>
                <Image src={xCircle} alt="" />
              </button>
            </ModalHeader>
            <form onSubmit={handleSubmit(handleSubmitUserRegister)}>
              <S.InputModal>
                <S.InputContent
                  placeholder="Nome Completo"
                  type="text"
                  {...register("userName")}
                />
                <S.IconSpan>
                  <User size={24} />
                </S.IconSpan>
              </S.InputModal>
              {errors.userName && (
                <span style={{ color: "#ff0000" }}>
                  {errors.userName.message}
                </span>
              )}
              <S.InputModal>
                <S.InputContent
                  placeholder="E-mail"
                  type="text"
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
              <span>
                <WarningCircle size={16} />
                Mínimo de 8 caracteres, no mínimo um número e um caractere
                especial
              </span>

              <S.InputModal>
                <S.InputContent
                  placeholder="Confirmação de senha"
                  type="password"
                  {...register("confirmPassword")}
                />
                <S.IconSpan>
                  <Image src={padlockIcon} width={24} height={24} alt="" />
                </S.IconSpan>
              </S.InputModal>
              {errors.confirmPassword && (
                <span style={{ color: "#ff0000" }}>
                  {errors.confirmPassword.message}
                </span>
              )}
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
