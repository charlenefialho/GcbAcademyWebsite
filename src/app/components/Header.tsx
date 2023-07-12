"use client";

import { List } from "@phosphor-icons/react";
import Image from "next/image";
import styled from "styled-components";

import {
  TagHeader,
  LogoGcb,
  ButtonListIcon,
  DivButtonList,
  NavLinks,
  ButtonEnterDiv,
  ButtonTeste,
} from "./styles";
import gcbLogo from "../assets/svg/gcb-logo.svg";
import { Poppins } from "next/font/google";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <LogoGcb>
        <Image src={gcbLogo} alt="Logo gcb" />
      </LogoGcb>
      <ButtonEnterDiv>
        
      </ButtonEnterDiv>
      <NavLinks></NavLinks>
      <DivButtonList>
        <ButtonListIcon>
          <List size={40} />
        </ButtonListIcon>
      </DivButtonList>
      <ButtonEnterDiv>Teste</ButtonEnterDiv>
    </TagHeader>

    
  );
}
