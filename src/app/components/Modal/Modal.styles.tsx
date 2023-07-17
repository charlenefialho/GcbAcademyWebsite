"use client";

import { styled } from "styled-components";

export const Background = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
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
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  p {
    width: 100%;
    text-align: left;
  }

  form > span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: -1rem;
    font-size: min(0.75rem, 3vw);
    color: #263238;
  }

  .useTermsCheckBox {
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-top: -0.5rem;
    font-size: 0.875rem;
    line-height: 1rem;

    > a {
      text-decoration: none;
      color: var(--beige);
    }
  }

  .divTextQuestion {
    display: flex;
    justify-content: center;
  }

  .linkTextQuestion {
    text-decoration: none;
    color: var(--beige);
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

  h4 {
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
`;

// Estilos responsivos
const breakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  xlarge: "1200px",
};

export const ContainerResponsive = styled(Container)`
  @media (max-width: ${breakpoints.medium}) {
    padding: 1rem;
    gap: 1rem;
  }
`;

export const InputModalResponsive = styled(InputModal)`
  @media (max-width: ${breakpoints.medium}) {
    max-width: 100%;
  }
`;
