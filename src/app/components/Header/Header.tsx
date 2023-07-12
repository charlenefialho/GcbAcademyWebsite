"use client";

import { List } from "@phosphor-icons/react";
import Image from "next/image";

import {
  TagHeader,
  NavLinks,
  NavLink
} from "./styles";
import { LogoGcb } from "../LogoGcb/LogoGcb";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { Button } from "../Button/Button";
//import gcbLogo from "../assets/svg/gcb-logo.svg";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <MenuMobile/>
      <LogoGcb/>
      <NavLinks>
        <NavLink href="#">Introdução</NavLink>
        <NavLink href="#">Jornadas</NavLink>
        <NavLink href="#">Sobre nós</NavLink>
      </NavLinks>
      <Button content="Entrar"></Button>
    </TagHeader>
  );
}
