"use client";

import { styled } from "styled-components";

export const ContainerReviews = styled.section`
  width: 100%;
  margin-top: 90px;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-bottom: 3.31rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleReviews = styled.h2`
  margin-bottom: 4rem;
  color: var(--beige-800);
  text-align: center;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 2vw;
    margin-right: 2vw;
  }
`;
