"use client";

import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled(Dialog.Content)`
min-width: 32rem;
  border-radius: 6px;
  width: 200px;
  height: 200px;
  background-color: white;
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  
`;

export const Container = styled.section`
  display: flex;
  max-width: 33.9375rem;
  max-height: 100vh;
  overflow-y: auto;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 0.9375rem;
  background: var(--color-light-light, #fcfcfd);

  p{
    width: 100%;
    color: #263238;
    text-align: justify;
    font-size: 1rem;
  }
`
