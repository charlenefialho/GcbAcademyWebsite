"use client";

import React from "react";
import AliceCarousel from "react-alice-carousel";

import * as S from "./Journey.styles";
import ImgWaveTop from "../../assets/svg/wave-top.svg";
import ImgWaveBottom from "../../assets/svg/wave-bottom.svg";
import imgFrontEnd from "@/app/assets/svg/frontend.svg";
import imgMobile from "@/app/assets/svg/phone.svg";
import imgBackEnd from "@/app/assets/svg/backend.svg";
import imgQuality from "@/app/assets/svg/quality.svg"
import { CardJourney } from "./CardJourney/CardJourney";

const infoCards = [
  {
    id: 1,
    urlImg: imgFrontEnd,
    contentTitle: "Web Developer",
    content: "21 Sugestões",
    bgColor: "#57D273"
  },
  {
    id: 2,
    urlImg: imgMobile,
    contentTitle: "Mobile Developer",
    content: "41 Sugestões",
    bgColor: "#FFAC52"
  },
  {
    id: 3,
    urlImg: imgBackEnd,
    contentTitle: "Backend Developer",
    content: "132 Sugestões",
    bgColor: "#0596FC"
  },
  {
    id: 4,
    urlImg: imgQuality,
    contentTitle: "Quality Assurance",
    content: "5 Sugestões",
    bgColor: "#68D4AE"
  }
  
];

const itemsCard = infoCards.map((info) => <CardJourney id={info.id} urlImg={info.urlImg} contentTitle={info.contentTitle} content={info.content} bgColor={info.bgColor}/>)


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
        <AliceCarousel items={itemsCard} responsive={itemsVisibles} />
      </S.Containerjourneys>
      <S.WaveBottom src={ImgWaveBottom} alt="wave" />
    </S.SectionJourney>
  );
}
