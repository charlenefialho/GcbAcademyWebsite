"use client";

import { styled, css } from "styled-components";

export interface ButtonStyledProps {
  visible?: boolean;
  styles?: Record<string, string>;
  light?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ styles }) => (styles ? css(styles) : null)}
  font-family: inherit;
  font-weight: 700;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;

  ${(props) =>
    props.light
      ? css`
          background-color: #f1f1f1;
          color: #23262f;
          border: ;
        `
      : css`
          background-color: var(--beige);
          color: var(--white);
        `};

  display: ${(props) => (props.visible ? "block" : "none")};

  @media (max-width: 768px) {
    display: ${(props) => props.visible && "block"};
  }

  @media (min-width: 769px) {
    display: ${(props) => (props.visible ? "block" : "block")};
  }
`;
