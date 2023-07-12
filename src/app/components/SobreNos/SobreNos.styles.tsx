import styled from "styled-components";
import Image from "next/image";

export const SectionContainer = styled.section`
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

export const TitleAboutUs = styled.h3`
  margin-bottom: 1vh;
  font-family: inherit;
  color: var(--beige-800);
  text-align: center;
`;

export const SectionTextAboutUs = styled.section`
  @media (max-width: 768px) {
    margin-left: 5vw;
    margin-right: 5vw;
    text-align: justify;
  }

  span{
    color: var(--beige-200);
  }

  div{
    margin-bottom: 2vh;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const DivImgAboutUS = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ImgAboutUsStyled = styled(Image)`
  width: 593px;
  height: 595px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 300px;
    height: 300px;
  }
`;
