'use client';

import React from "react";

import * as S from "./Reviews.styles";
import { Card } from "./Card/Card";

const items = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];

const itemsVisibles = {
  768: {
    items: 1,
  },
  1024: {
    items: 2,
    itemsFit: "contain",
  },
  1440: {
    items: 3,
    itemsFit: "contain",
  },
};

export function Reviews() {
  return (
    <S.ContainerReviews>
      <S.TitleReviews>Veja o que outros colaboradores dizem!</S.TitleReviews>
      <S.AliceCarouselStyled
        items={items}
        responsive={itemsVisibles}
      />
    </S.ContainerReviews>
  );
}
