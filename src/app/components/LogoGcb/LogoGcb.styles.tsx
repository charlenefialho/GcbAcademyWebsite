"use client";

import { css, styled } from "styled-components";

export interface IconProps {
  light?: boolean;
  mediaHeader?: boolean;
  styles?: Record<string, string>;
}

export const IconLogoGcb = styled.svg<IconProps>`
  width: calc(10rem + 15px);
  height: calc(3rem + 4px);
  ${({ styles }) => styles && css(styles)}
  ${({ light }) =>
    light
      ? css`
          .head,
          .name {
            fill: var(--white);
          }
        `
      : null}

  ${({ mediaHeader }) =>
    mediaHeader &&
    css`
      @media (min-width: 768px) {
        margin-left: 4vw;
        margin-top: 20px;
        margin-bottom: 21px;
      }

      @media (max-width: 768px) {
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 21px;
      }
    `}
`;
