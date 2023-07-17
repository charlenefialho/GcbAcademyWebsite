"use client";

import React, { useState } from "react";

import * as S from "./Header.styles";
import { LogoGcb } from "../LogoGcb/LogoGcb";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { Button } from "../Button/Button";
import { LoginModal } from "../Modal/Login/LoginModal";

export function Header() {
  const [ModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <S.TagHeader>
      <MenuMobile isOpen={false} />
      <LogoGcb mediaHeader />
      <S.NavLinks>
        <S.NavLink href="#">Introdução</S.NavLink>
        <S.NavLink href="#">Jornadas</S.NavLink>
        <S.NavLink href="#">Sobre nós</S.NavLink>
      </S.NavLinks>
      <Button
        content="Entrar"
        visible={false}
        styles={S.buttonHeaderStyles}
        onClick={() => setModalOpen(!ModalOpen)}
      ></Button>

      <LoginModal isOpen={ModalOpen} setOpen={setModalOpen} />
    </S.TagHeader>
  );
}
