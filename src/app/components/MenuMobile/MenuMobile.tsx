"use client";

import React, { useState } from "react";

import * as S from "./MenuMobile.styles";
import { Button } from "../Button/Button";
import { buttonHeaderStyles } from "../Header/Header.styles";
import { LoginModal } from "../Modal/Login/LoginModal";

interface MenuProps {
  isOpen: boolean;
}

export function MenuMobile({ isOpen: initialIsOpen }: MenuProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.MenuToggle onClick={toggleMenu}>
        {!isOpen && <S.ToggleIcon size={45} />}
      </S.MenuToggle>
      <S.MenuContainer isOpen={isOpen} onClick={toggleMenu}>
        {isOpen && <S.CloseIcon size={45} />}
        <S.MenuItems>
          <S.MenuItem>
            <S.MenuLink href="#">Introdução</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="#">Jornadas</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="#">Sobre nós</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <Button
              content="Entrar"
              visible={true}
              styles={buttonHeaderStyles}
              onClick={() => setModalOpen(!isModalOpen)}
            />
          </S.MenuItem>
        </S.MenuItems>
      </S.MenuContainer>
      <LoginModal isLoginOpen={isModalOpen} setLoginOpen={setModalOpen} />
    </>
  );
}
