"use client";

import { List } from "@phosphor-icons/react";
import Image from "next/image";

import {
  TagHeader,
  NavLinks,
  NavLink,
} from "./Header.styles";
import { LogoGcb } from "../LogoGcb/LogoGcb";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { Button } from "../Button/Button";


interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <MenuMobile isOpen={false}/>
      <LogoGcb/>
      <NavLinks>
        <NavLink href="#">Introdução</NavLink>
        <NavLink href="#">Jornadas</NavLink>
        <NavLink href="#">Sobre nós</NavLink>
      </NavLinks>
      <Button content="Entrar" visible={false}></Button>
    </TagHeader>
  );
}
