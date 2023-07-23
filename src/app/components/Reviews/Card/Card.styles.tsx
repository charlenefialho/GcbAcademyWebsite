'use client';

import styled from "styled-components";
import Image from "next/image";

export const DivCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerCard = styled.section`
  max-width: 400px;
  width: 100%;
  margin-right: 1.35rem;
  display: grid;
  grid-template-columns: 66px 1fr;
  gap: 1rem;
  padding: 2rem 1.25rem;
  border-radius: 1.25rem;

  @media (max-width: 728px) {
    grid-template-columns: 66px 1fr;
    grid-template-rows: 1fr;
  }

  background: var(--white);
  box-shadow: 0px 2.794929027557373px 27.75286293029785px 0px
      rgba(41, 50, 65, 0.02),
    0px 6.7166032791137695px 52.79621124267578px 0px rgba(41, 50, 65, 0.03),
    0px 12.646767616271973px 77.73407745361328px 0px rgba(41, 50, 65, 0.04),
    0px 22.55967140197754px 107.91031646728516px 0px rgba(41, 50, 65, 0.05),
    0px 42.19538497924805px 157.30630493164062px 0px rgba(41, 50, 65, 0.06),
    0px 101px 302px 0px rgba(41, 50, 65, 0.08);

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  p {
    color: var(--black);
    flex: 1;

    @media (max-width: 1220px) {
      font-size: 0.875rem;
    }
  }
`;

export const AuthorName = styled.h2`
  font-size: 1.5rem;
  color: var(--beige-800);

  @media (max-width: 1220px) {
    font-size: 1rem;
  }
`;

export const AvatarCard = styled(Image)`
  width: 66px;
  height: 66px;
  border-radius: 66px;
`;

export const DivContent = styled.div``;

export const DivStar = styled.div`
  width: 98px;
  height: 18px;
`;
