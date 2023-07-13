import styled from "styled-components";
import Image from "next/image";

export const SectionAboutUs = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2vh auto;
`

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

export const TitleAboutUs = styled.h3`
  margin-bottom: 1vh;
  font-family: inherit;
  color: var(--beige-800);
  text-align: center;
`;

export const SectionTextAboutUs = styled.section`
  width: 50%;
  .contentTextAboutUs{
    width: 100%;
  }
  >div{
    width: 60%;
    
  }

  p{
    text-align: justify;
    font-size: 1rem;
  }
  
  
  @media (max-width: 768px) {
    width: 100%;
    .contentTextAboutUs{
      width: 100%;
      padding-left: 4vw;
      padding-right: 4vw;
  }

  p{
    text-align: justify;
    font-size: 0.8rem;
  }
    
  }

  span{
    color: var(--beige-200);
  }

  div{
    margin-bottom: 2vh;
  }

`;

export const DivImgAboutUS = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ImgAboutUsStyled = styled(Image)`
  width: 400px;
  height: 400px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 300px;
    height: 300px;
  }
`;
