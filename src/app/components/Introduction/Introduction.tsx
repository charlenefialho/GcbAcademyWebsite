
import * as S from "./styles";

import bgImage from "../../assets/img/bgImage.png";


export function Introduction(){
    return (
        <S.TagSection>
            <S.BackgroundImage src={bgImage} alt="Prédio de fundo" />
            <S.Title>Eleve sua jornada para o próximo nível com excelência!</S.Title>
            <S.subTitle>Desde 2021, o GCB Academy tem ajudado pessoas a crescerem profissionalmente.</S.subTitle>
            <S.ButtonStyled content="Vamos Explorar!"></S.ButtonStyled>
        </S.TagSection>
    );
}