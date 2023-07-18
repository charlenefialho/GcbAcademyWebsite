"use client";

import Image from "next/image";
import styled from "styled-components";

export const SectionJourney = styled.section`
  position: relative;
  background-color: var(--beige);
  width: 100%;
  height: 934px;

  > h1 {
    padding-top: 17vh;
    text-align: center;
    font-family: inherit;
    color: var(--white);
  }
`;

export const Containerjourneys = styled.section`
  width: 100%;
  margin-top: 4vh;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-bottom: 3.31rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WaveTop = styled(Image)`
  position: absolute;
  top: -8rem;
  left: 0;
  width: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const WaveBottom = styled(Image)`
  position: absolute;
  bottom: -8rem;
  left: 0;
  width: 100%;
  object-fit: cover;
  z-index: 0;
`;
