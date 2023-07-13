import { styled } from "styled-components";
import Image from "next/image";

export const NewsLetterContainer = styled.section`
  width: 100%;
  margin-top: 4.39rem;
  margin-bottom: 4.39rem;
  display: flex;
  justify-content: center;
`;

export const WrapperButton = styled.div`
  position: relative;
  max-width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonInput = styled.button`
  position: absolute;
  top: 10%;
  right: 0;
  transform: translateX(-70%);
  aspect-ratio: 1;
  width: 30%;
  height: 80%;
  font-family: inherit;
  font-weight: 700;
  border-radius: 23px;
  background-color: var(--beige);
  border: none;
  color: var(--white);

  @media (max-width: 768px) {
    right: 0;
    transform: translateX(-40%);
    width: 30%;
  }
`;

export const SectionNewsLetter = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: var(--beige);
  width: 85vw;
  height: 396.8px;
  border-radius: 20px;

  @media (min-width: 769px) {
    .content {
      width: 60%;
      display: flex;
      justify-content: center;
      margin-top: 2vh;
      margin-left: 4vw;
    }

    .divTitle > h2 {
      font-size: 2rem;
      padding-top: 10vh;
      text-align: left;
    }

    .text > p {
      width: 90%;
      margin-top: 2vh;
      margin-bottom: 10vh;
      text-align: left;
    }

    .imgDiv {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  div > input {
    width: 80%;
    padding: 1rem 2rem;
    background-color: var(--white);
    border-radius: 26px;
    border: none;
  }

  div > input::placeholder {
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 300;
    color: rgba(41, 50, 65, 0.5);
  }

  div > input:focus {
    outline: 1px solid rgba(41, 50, 65, 0.5);
  }

  .title,
  p {
    color: var(--white);
    font-family: inherit;
    line-height: normal;
    font-style: normal;
    text-align: center;
  }

  .title {
    font-weight: 700;
    text-align: left;
    text-align: center;
  }

  p {
    font-weight: 300;
  }

  @media (max-width: 320px) {
    div > input {
      padding: 1rem 0.9rem;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;

    .imgDiv {
      display: none;
    }
    p {
      width: 80%;
      margin-top: 1vh;
      margin-bottom: 4vh;
      font-size: 1rem;
    }

    .text {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    div {
      margin-top: 4vh;
    }
    div > input {
      width: 80%;
    }
  }
`;

export const ImgStyled = styled(Image)`
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: 2vw;
    width: 270px;
    height: 270px;
  }

  @media (max-width: 768px) {
    display: none;

    div {
      margin-right: 2vw;
    }
  }
`;
