import { styled } from "styled-components";
import React from "react";
import * as S from "./Journey.styles";
import ImgWaveTop from "../../assets/svg/wave-top.svg";
import ImgWaveBottom from "../../assets/svg/wave-bottom.svg";
import { CardJourney } from "./CardJourney/CardJourney";

const itensCard = [
  <CardJourney />,
  <CardJourney />,
  <CardJourney />,
  <CardJourney />,
  <CardJourney />,
  <CardJourney />,
];

const itemsVisibles = {
  768: {
    items: 1,
  },
  769: {
    items: 2,
    itemsFit: "contain",
  },
  1440: {
    items: 4,
    itemsFit: "contain",
  },
};

export function Jornada() {
  return (
    <S.SectionJourney>
      <S.WaveTop src={ImgWaveTop} alt="wave" />
      <h1>Jornadas</h1>
      <S.Containerjourneys>
        <S.AliceCarouselStyled
          disableButtonsControls
          items={itensCard}
          responsive={itemsVisibles}
        />
      </S.Containerjourneys>
      <S.WaveBottom src={ImgWaveBottom} alt="wave" />
    </S.SectionJourney>
  );
}
