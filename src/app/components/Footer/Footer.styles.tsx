import Image from "next/image";
import { styled } from "styled-components";

export const SectionFooter = styled.section`
  position: relative;
  margin-top: 35vh;
  width: 100%;
  height: 60vh;
`;

export const ContainerFooter = styled.section`
  max-width: 100%;
  min-height: 60vh;
  padding: 0 4%;
  margin: auto;
  background-color: var(--beige);

  .divThanks {
    width: 100%;
    margin-top: 2rem;
  }

  hr {
    border-color: var(--white);
    width: 100%;
    margin-top: 1rem;
  }

  .thanks {
    width: 100%;
    margin-top: 2rem;
    padding-bottom: 2rem;
    color: var(--white);
    text-align: center;
    font-family: inherit;
    font-weight: 400;
  }
`;

export const BackgroundWave = styled(Image)`
  position: absolute;
  top: -30vh;
  left: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;
export const RowFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ColFooter = styled.div`
  width: 25%;
  padding: 0 15px;

  .divLogo {
    display: flex;
    justify-content: center;
  }

  h4 {
    margin-top: 0.5rem;
    font-family: inherit;
    font-size: 1.125rem;
    color: var(--white);
    margin-bottom: 2.44rem;
    font-weight: 700;
    position: relative;
  }

  .redesSociais {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 9rem;
  }

  ul {
    list-style: none;
  }

  ul li {
    margin: 0.81rem 0;
  }

  ul li a,
  .contact {
    font-family: inherit;
    font-size: 1rem;
    color: var(--white);
    font-weight: 400;
  }

  ul li a {
    text-decoration: none;
    display: block;
    transition: all 0.3s ease;
  }

  ul li a:hover {
    color: #cecdcd;
    padding-left: 10px;
  }

  @media (max-width: 800px) {
    width: 50%;
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
