"use client";

import { styled } from "styled-components";
import Image from "next/image";

export const TagSection = styled.section`
  position: relative;
  height: 906px;
  width: 100%;
`;

export const Container = styled.section`
  position: absolute;
  height: 100vh;
  top: 15rem;
  left: 10vw;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px){
    width: 100%;
    left: 0;

    .divTitle, div,.divSubTitle{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div{
      margin-top: 2rem;
    }
  }
`;

export const BackgroundImage = styled(Image)`
  background-size: cover;
  z-index: -1;
`;

export const Title = styled.h1`
  color: var(--beige);
  font-family: inherit;
  font-size: calc(3rem + 0.125px);
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  max-width: 80%;

  @media(min-width: 1024px){
    max-width: 45%;
    text-align: left;
    font-size: max(1rem, 3vw);
  }

  @media(min-width: 768px) and (max-width:1024px){
    max-width: 50%;
    font-size: 2.1rem;
  }

  @media(min-width: 426px) and (max-width:768px){
    max-width: 80%;
    text-align: center;
    font-size: 2.1rem;
  }

  @media(max-width: 426px){
    max-width: 90%;
    text-align: center;
    font-size: 2rem;
  }

  
`;

export const subTitle = styled.p`
  max-width: 40%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--black);
  font-family: inherit;

  @media(min-width:1024px){
    max-width: 30%;
    font-size: max(1rem, 1.4vw);
  }

  @media(min-width: 768px) and (max-width:1024px){
    max-width: 40%;
    font-size: 1rem;
  }

  @media(min-width: 426px) and (max-width:768px){
    max-width: 70%;
    text-align: center;
    font-size: 1.2rem;
  }

  @media(max-width: 426px){
    text-align: justify;
    max-width: 90%;
    text-align: center;
  }
`;
