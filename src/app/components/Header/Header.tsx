"use client";

import { useState } from "react";

import {
  TagHeader,
  NavLinks,
  NavLink,
  buttonHeaderStyles,
} from "./Header.styles";
import { LogoGcb } from "../LogoGcb/LogoGcb";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { Button } from "../Button/Button";
import { LoginModal } from "../Modal/Login/LoginModal";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const [ModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <TagHeader>
      <MenuMobile isOpen={false} />
      <LogoGcb mediaHeader/>
      <NavLinks>
        <NavLink href="#">Introdução</NavLink>
        <NavLink href="#">Jornadas</NavLink>
        <NavLink href="#">Sobre nós</NavLink>
      </NavLinks>
      <Button
        content="Entrar"
        visible={false}
        styles={buttonHeaderStyles}
        onClick={() => setModalOpen(!ModalOpen)}
      ></Button>

      <LoginModal isOpen={ModalOpen} setOpen={setModalOpen} />
    </TagHeader>
  );
}
