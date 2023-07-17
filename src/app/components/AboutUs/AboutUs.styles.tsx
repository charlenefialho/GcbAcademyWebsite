"use client";

import styled from "styled-components";
import Image from "next/image";

export const SectionAboutUs = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20vh auto;

  .divTitle {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 769px) {
    .divTitle {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export const ContainerAbouUs = styled.section`
  width: 100%;
  margin: 2vh auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    justify-items: center;
    flex-wrap: wrap;
  }
`;

export const TitleAboutUs = styled.h2`
  font-family: inherit;
  color: var(--beige-800);
`;

export const SectionTextAboutUs = styled.section`
  width: 50%;
  p {
    text-align: justify;
  }

  span {
    color: var(--beige-200);
  }

  .contentTextAboutUs {
    padding-left: 6.6vw;
    padding-right: 5.2vw;
    margin-bottom: 1.2rem;
  }

  div {
    margin-bottom: 1.2rem;
  }

  @media screen and (max-width: 48em) {
    margin-top: 2vh;
    width: 100%;

    .contentTextAboutUs {
      width: 100%;
      padding-top: 2rem;
      padding-left: 4vw;
      padding-right: 4vw;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media screen and (min-width: 48.063em) {
    p {
      font-size: 0.84rem;
    }

    .contentTextAboutUs {
      padding-top: 11rem;
    }
  }

  @media screen and (min-width: 56.313em) {
    p {
      font-size: 1rem;
    }

    .contentTextAboutUs {
      padding-top: 10rem;
    }
  }

  @media screen and (min-width: 62.5em) {
    p {
      font-size: 1.1rem;
    }

    .contentTextAboutUs {
      padding-top: 9rem;
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 66.25em) {
    p {
      font-size: 1.1rem;
    }

    .contentTextAboutUs {
      padding-top: 8rem;
    }
  }

  @media screen and (min-width: 70.625em) {
    p {
      font-size: 1.2rem;
    }

    .contentTextAboutUs {
      padding-top: 7rem;
      div {
        margin-bottom: 3rem;
      }
    }
  }

  @media screen and (min-width: 79.188em) {
    p {
      font-size: 1.4rem;
    }

    .contentTextAboutUs {
      padding-top: 6rem;
      padding-left: 6.6vw;
      padding-right: 5.2vw;
      div {
        margin-bottom: 2rem;
      }
    }
  }
`;

export const DivImgAboutUS = styled.div`
  width: 50%;
  margin-top: 5vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;

export const ImgAboutUsStyled = styled(Image)`
  width: 90%;
  max-height: 100%;
  @media (min-width: 769px) and (max-width: 1262px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 300px;
    height: 300px;
  }
`;
