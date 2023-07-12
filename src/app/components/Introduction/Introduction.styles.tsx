"use client";

import { styled } from "styled-components";
import Image from "next/image";
import { Button } from "../Button/Button";

export const TagSection = styled.section`
  position: relative;
  height: calc(100vh - (6rem - 3px));
  width: 100%;
`;

export const Container = styled.section`
  position: absolute;
  height: 100vh;
  top: 20vh;
  left: 10vw;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px){
    justify-items: center;
    align-content: center;
    width: 100%;
  }
`;

export const BackgroundImage = styled(Image)`
  background-size: cover;
`;

export const Title = styled.h1`
  color: var(--beige);
  font-family: inherit;
  font-size: calc(3rem + 0.125px);
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  max-width: 80%;

  @media(max-width: 768px){
    max-width: 90%;
    text-align: center;
    font-size: calc(2rem + 0.125px);
  }
`;

export const subTitle = styled.p`
  max-width: 40%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--black);
  font-family: inherit;

  @media(max-width: 768px){
    max-width: 80%;
    text-align: center;
  }
`;

export const ButtonStyled = styled(Button)`
  
`;
