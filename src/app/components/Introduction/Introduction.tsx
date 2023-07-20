import React from "react";
import * as S from "./Introduction.styles";
import bgImage from "../../assets/img/bgImage.png";
import { Button } from "../Button/Button";

export function Introduction() {
  return (
    <S.TagSection id="introduction">
      <S.Container>
        <div className="divTitle">
          <S.Title>
            Eleve sua jornada para o próximo nível com excelência!
          </S.Title>
        </div>
        <div className="divSubTitle">
          <S.SubTitle>
            Desde 2021, o GCB Academy tem ajudado pessoas a crescerem
            profissionalmente.
          </S.SubTitle>
        </div>
        <div>
          <Button content="Vamos Explorar!" visible styles={S.buttonStyle} />
        </div>
      </S.Container>
      <S.BackgroundImage src={bgImage} alt="Prédio de fundo" />
    </S.TagSection>
  );
}
