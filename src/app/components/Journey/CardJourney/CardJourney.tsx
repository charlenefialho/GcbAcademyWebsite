"use client";

import React from "react";

import * as S from "./CardJourney.styles";

interface cardJourney {
  id:React.Key,
  urlImg : string,
  contentTitle: string,
  content: string,
  bgColor: string
}

export function CardJourney({id, urlImg, contentTitle, content, bgColor}: cardJourney) {
  return (
    <S.DivCard>
      <S.CardContainer>
        <S.CardContent style={{backgroundColor: bgColor}}>
          <S.ImageCard src={urlImg} alt="Card Imagem" />
          <S.MiniContainer>
            <div>
              <S.TitleMiniContainer>{contentTitle}</S.TitleMiniContainer>
              <S.Text>{content}</S.Text>
              <S.StarsContainer>*****</S.StarsContainer>
            </div>
          </S.MiniContainer>
        </S.CardContent>
      </S.CardContainer>
    </S.DivCard>
  );
}
