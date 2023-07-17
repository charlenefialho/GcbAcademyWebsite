"use client";

import Link from "next/link";
import styled from "styled-components";

export const buttonHeaderStyles = {
  width: "122px",
  fontSize: "16px",
  padding: "10px 20px",
  marginRight: "8vw",
};

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
  width: 50vw;
  justify-content: flex-end;
  align-items: center;
  gap: 64px;

  @media (min-width: 769px) and (max-width: 1024px) {
    justify-content: center;
    gap: 30px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  text-align: center;
  font-size: max(0.9rem, 1.2vw);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
