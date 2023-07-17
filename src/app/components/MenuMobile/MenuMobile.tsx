"use client";

import React, { useState } from "react";

import * as S from "./MenuMobile.styles";
import { Button } from "../Button/Button";
import { buttonHeaderStyles } from "../Header/Header.styles";
import { LoginModal } from "../Modal/Login/LoginModal";

interface MenuProps {
  isOpen: boolean;
}

export function MenuMobile(props: MenuProps) {
  const [ModalOpen, setModalOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

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
              onClick={() => setModalOpen(!ModalOpen)}
            />
          </S.MenuItem>
        </S.MenuItems>
      </S.MenuContainer>
      <LoginModal isOpen={ModalOpen} setOpen={setModalOpen} />
    </>
  );
}
