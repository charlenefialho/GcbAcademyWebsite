import { useState } from "react";

import * as S from "./styles";

interface MenuProps {
  
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
          <S.MenuItem><S.MenuLink href="#">Home</S.MenuLink></S.MenuItem>
          <S.MenuItem><S.MenuLink href="#">About</S.MenuLink></S.MenuItem>
          <S.MenuItem><S.MenuLink href="#">Contact</S.MenuLink></S.MenuItem>
        </S.MenuItems>
      </S.MenuContainer>
    </>
  );
}
