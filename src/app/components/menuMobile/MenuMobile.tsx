import { useState } from "react";

import * as S from "./styles";

interface MenuProps {
  isOpen : boolean
}

export function MenuMobile(props: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.MenuToggle onClick={toggleMenu}>
        {!isOpen && <S.ToggleIcon  size={45}/>}
      </S.MenuToggle>
      <S.MenuContainer isOpen={isOpen}  onClick={toggleMenu}>
        {isOpen && <S.CloseIcon size={45}/>}
        <S.MenuItems>
          <S.MenuItem><S.MenuLink href="#">Introdução</S.MenuLink></S.MenuItem>
          <S.MenuItem><S.MenuLink href="#">Jornadas</S.MenuLink></S.MenuItem>
          <S.MenuItem><S.MenuLink href="#">Sobre nós</S.MenuLink></S.MenuItem>
        </S.MenuItems>
      </S.MenuContainer>
    </>
  );
}
