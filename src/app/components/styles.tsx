"use client";

import styled from "styled-components";
import { Poppins } from "next/font/google";

export const TagHeader = styled.header`
  height: calc(6rem - 3px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: calc(6rem - 3px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoGcb = styled.div`
  padding-left: 100px;
  width: calc(10rem + 15px);
  height: calc(3rem + 4px);

  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 50px;
  }
`;

export const ButtonListIcon = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  line-height: 0;
  border-radius: 2px;

  &:focus {
    outline: 1px solid var(--beige-200);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ButtonEnterDiv = styled.button`
  border-radius: var(--border-radius);
  background-color: var(--beige);
  width: 122px;
  height: 43px;
  border: none;
  color: var(--white);
`;

export const ButtonTeste = styled(ButtonEnterDiv)<HTMLButtonElement>`
  display: flex;

  @media (max-width: 320px) {
    display: none;
    
  }
`;

export const DivButtonList = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 3;
`;
