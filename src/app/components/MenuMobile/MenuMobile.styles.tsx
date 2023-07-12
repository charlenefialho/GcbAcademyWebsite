'use client'

import styled from 'styled-components';
import { X , List} from "@phosphor-icons/react";
import Link from 'next/link';

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--white);
  z-index: 5;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  overflow: hidden;

  @media(min-width: 769px){
    display: none;
  }

`;

export const MenuToggle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  @media(min-width: 769px){
    display: none;
  }
`;

export const ToggleIcon = styled(List)`
    color: var(--beige);
`

export const CloseIcon = styled(X)`
  color: #333;
  position: absolute;
  top: 1rem;
  right: 1rem;  
  color: var(--beige);
`;


export const MenuItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 100px;
`;

export const MenuItem = styled.li`
  padding: 2rem;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #000;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

`
