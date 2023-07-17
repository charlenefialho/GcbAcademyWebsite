"use client";

import React from "react";

import * as S from "./Newsletter.styles";
import imgNewsLetter from "../../assets/svg/news-letter.svg";

export function Newsletter() {
  return (
    <S.NewsLetterContainer>
      <S.SectionNewsLetter>
        <div className="content">
          <div>
            <div className="divTitle">
              <h2 className="title">Inscreva-se no Academy News</h2>
            </div>
            <div className="text">
              <p>
                Receba as últimas notícias, atualizações e outras coisas da
                semana.
              </p>
            </div>
            <S.WrapperButton>
              <input type="text" placeholder="Seu e-mail aqui" />
              <S.ButtonInput content="Assine">Assine</S.ButtonInput>
            </S.WrapperButton>
          </div>
        </div>
        <div className="imgDiv">
          <S.ImgStyled
            src={imgNewsLetter}
            alt="Caixa de correio"
            width={332}
            height={332}
          />
        </div>
      </S.SectionNewsLetter>
    </S.NewsLetterContainer>
  );
}
