"use client";

import React, { ButtonHTMLAttributes } from "react";

import { ButtonStyled } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  visible?: boolean;
  styles?: Record<string, string>;
  light?:boolean;
}

export function Button({ content, visible, styles, onClick , light}: ButtonProps) {
  return (
    <ButtonStyled visible={visible} styles={styles}  onClick={onClick} ligth={light}>
      {content}
    </ButtonStyled>
  );
}
