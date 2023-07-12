"use client";

import Link from "next/link";
import styled from "styled-components";


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
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  max-width: 40vw;
  justify-content: center;
  align-items: center;
  gap: 64px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
