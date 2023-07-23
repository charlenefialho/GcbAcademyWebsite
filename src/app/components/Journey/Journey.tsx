"use client";

import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

import * as S from "./Journey.styles";
import ImgWaveTop from "../../assets/svg/wave-top.svg";
import ImgWaveBottom from "../../assets/svg/wave-bottom.svg";
import imgFrontEnd from "../../assets/img/frontend.png";
import imgMobile from "../../assets/svg/phone.svg";
import imgBackEnd from "../../assets/img/backend.png";
import imgQuality from "../../assets/svg/quality.svg";
import { CardJourney } from "./CardJourney/CardJourney";

export const infoCards = [
  {
    id: 1,
    urlImg: imgFrontEnd,
    contentTitle: "Web Developer",
    content: "21 Sugestões",
    bgColor: "#62E776",
    journey: {
      content:
        "A jornada de web developer no GCB Academy é uma oportunidade emocionante de mergulhar no mundo do desenvolvimento web. Durante o programa, você vai adquirir as habilidades essenciais para criar sites e aplicativos incríveis, com React e Next.js aplicando tecnologias como Testing Library e Storybook.",
    },
  },
  {
    id: 2,
    urlImg: imgMobile,
    contentTitle: "Mobile Developer",
    content: "41 Sugestões",
    bgColor: "#FFAC52",
    journey: {
      content:
        "A jornada de Mobile Developer no GCB Academy é uma oportunidade empolgante de mergulhar no universo do desenvolvimento mobile. Durante o programa, você adquirirá habilidades essenciais para criar aplicativos móveis excepcionais, utilizando tecnologias como React Native. Você terá a chance de trabalhar em projetos práticos e desafiadores, explorando recursos avançados, como integração de APIs, autenticação de usuários e otimização de desempenho. Com o apoio de instrutores experientes e colegas motivados, estará preparado para enfrentar os desafios do mercado de trabalho e construir uma carreira de sucesso como Mobile Developer. Vamos embarcar nessa jornada rumo à excelência em desenvolvimento mobile!",
    },
  },
  {
    id: 3,
    urlImg: imgBackEnd,
    contentTitle: "Backend Developer",
    content: "132 Sugestões",
    bgColor: "#4A78FC",
    journey: {
      content:
        "A jornada de Backend Developer no GCB Academy é uma oportunidade emocionante de mergulhar no mundo do desenvolvimento backend. Durante o programa, você adquirirá as habilidades essenciais para criar sistemas e APIs robustas, utilizando tecnologias como Node.js e frameworks como Express e Nest.js. Aprenderá a projetar arquiteturas escaláveis, a lidar com bancos de dados e a implementar autenticação e segurança em seus projetos. Com o apoio de instrutores experientes e colegas motivados, você estará preparado para enfrentar os desafios do mercado de trabalho e construir uma carreira de sucesso como Backend Developer. Vamos embarcar nessa jornada rumo à excelência em desenvolvimento backend!",
    },
  },
  {
    id: 4,
    urlImg: imgQuality,
    contentTitle: "Quality Assurance",
    content: "5 Sugestões",
    bgColor: "#68D4AE",
    journey: {
      content:
        "A jornada de Quality Assurance no GCB Academy é uma oportunidade emocionante de mergulhar no mundo da garantia de qualidade de software. Durante o programa, você adquirirá as habilidades essenciais para realizar testes e garantir a qualidade de aplicativos e sistemas. Aprenderá a criar planos de teste, executar testes manuais e automatizados, identificar e relatar bugs e colaborar com os desenvolvedores para melhorar a qualidade do software. Com o apoio de instrutores experientes e colegas motivados, você estará preparado para enfrentar os desafios do mercado de trabalho e construir uma carreira de sucesso como Quality Assurance. Vamos embarcar nessa jornada rumo à excelência em garantia de qualidade de software!",
    },
  },
];

const createCardItems = () =>
  infoCards.map((info) => (
    <CardJourney
      key={info.id}
      id={info.id}
      urlImg={info.urlImg}
      contentTitle={info.contentTitle}
      content={info.content}
      bgColor={info.bgColor}
      titleModal={info.contentTitle}
      contentTextModal={info.journey.content}
    />
  ));

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

export function Journey() {
  return (
    <S.SectionJourney id="journey">
      <S.WaveTop src={ImgWaveTop} alt="wave" />
      <h1>Jornadas</h1>
      <S.Containerjourneys>
        <AliceCarousel items={createCardItems()} responsive={itemsVisibles} />
      </S.Containerjourneys>
      <S.WaveBottom src={ImgWaveBottom} alt="wave" />
    </S.SectionJourney>
  );
}
