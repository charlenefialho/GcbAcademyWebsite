"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

import * as S from "./Header.styles";
import { LogoGcb } from "../LogoGcb/LogoGcb";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { Button } from "../Button/Button";
import { LoginModal } from "../Modal/Login/LoginModal";
import { onAuthChanged } from "../../../../utils/firebase/authService";
import { auth } from "../../../../utils/firebase/firebaseService";

export function Header() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function handleLogout() {
    try {
      await signOut(auth);
      toast.success("Logout realizado com sucesso");
    } catch (error) {
      toast.error("Erro ao realizar logout");
    }
  }

  return (
    <S.TagHeader>
      <MenuMobile isOpen={false} />
      <LogoGcb mediaHeader />
      <S.NavLinks>
        <S.NavLink href="/#introduction">Introdução</S.NavLink>
        <S.NavLink href="/#journey">Jornadas</S.NavLink>
        <S.NavLink href="/#aboutUs">Sobre nós</S.NavLink>
      </S.NavLinks>

      {isLoggedIn ? (
        <Button
          content="Sair"
          visible={false}
          styles={S.buttonHeaderStyles}
          onClick={handleLogout}
        />
      ) : (
        <Button
          content="Entrar"
          visible={false}
          styles={S.buttonHeaderStyles}
          onClick={() => setModalOpen(!isModalOpen)}
        />
      )}

      <LoginModal isLoginOpen={isModalOpen} setLoginOpen={setModalOpen} />
    </S.TagHeader>
  );
}
