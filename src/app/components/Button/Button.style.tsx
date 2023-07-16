"use client";

import { styled ,css} from "styled-components";

export interface ButtonStyledProps {
  visible?: boolean;
  styles?: Record<string, string>;
}


export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ styles }) => (styles ? css(styles) : null)}
  font-family: inherit;
  font-weight: 700;
  border-radius: var(--border-radius);
  background-color: var(--beige);
  border: none;
  color: var(--white);
  cursor: pointer;

  display: ${(props) => (props.visible ? "block" : "none")};

  @media (max-width: 768px) {
    display: ${(props) => props.visible && "block"};
  }

  @media (min-width: 769px) {
    display: ${(props) => (props.visible ? "block" : "block")};
  }
`;
