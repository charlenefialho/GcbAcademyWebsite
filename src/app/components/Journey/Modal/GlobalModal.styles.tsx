"use client";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

const breakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  xlarge: "1200px",
};

export const Close = styled(Dialog.Close)`
  line-height: 0;
`;

export const Overlay = styled(Dialog.Overlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow-y: auto;
`;

export const Content = styled(Dialog.Content)`
  max-height: 96vh;
  overflow-y: auto;
  min-width: 32rem;
  max-width: 34rem;
  border-radius: 6px;
  background-color: var(--white);
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${breakpoints.small}) {
    min-width: 90%;
  }
`;

export const Container = styled.section`
  display: flex;
  width: 100%;
  overflow-y: auto;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 0.9375rem;
  background: var(--white);

  form {
    display: flex;
    width: 100%;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .contentText {
    width: 100%;
    color: #263238;
    text-align: justify;
    font-size: min(1rem, 3.5vw);
  }

  .listaSugestoes {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .listaSugestoes > .buttonSugestao {
    width: 100%;
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem;
    border: 2px solid #dfdfe6;
    background-color: #fcfcfd;
    border-radius: 2.5rem;
    color: #23262f;

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .textAreaCriarSugestao {
    width: 100%;
    height: 10.5rem;
    padding: 1rem;
    border-radius: 0.75rem;
    border: 2px solid var(--color-light-light-3, #dfdfe6);
    background: var(--color-light-light, #fcfcfd);
    position: relative;

    &:focus {
      border: 1px solid var(--black);
    }
  }

  @media (max-width: ${breakpoints.small}) {
    gap: 1rem;
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  button:focus {
    border: 1px solid var(--black);
  }

  .titleModal {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
  }
`;

export const buttonStyleModal = {
  width: "100%",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  fontSize: "1rem",
};

export const InputModal = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 30.125rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  border: 2px solid var(--color-light-light-3, #dfdfe6);
  background: var(--color-light-light, #fcfcfd);
  position: relative;

  &:focus {
    border: 1px solid var(--black);
  }
`;

export const InputContent = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
  padding-left: 3rem;
  gap: 0.5rem;
  flex: 1;
  border: none;
  background: transparent;
  border-radius: 0.75rem;
`;

export const IconSpan = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0.8rem;
  height: 100%;

  @media (max-width: ${breakpoints.medium}) {
    left: 2%;
  }
`;
