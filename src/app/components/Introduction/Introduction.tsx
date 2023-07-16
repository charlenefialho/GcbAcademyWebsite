
import * as S from "./Introduction.styles";

import bgImage from "../../assets/img/bgImage.png";
import { Button } from "../Button/Button";


export function Introduction(){
    return (
        <S.TagSection>
            <S.BackgroundImage src={bgImage} alt="Prédio de fundo" />
            <S.Container>
                <div className="divTitle"><S.Title>Eleve sua jornada para o próximo nível com excelência!</S.Title></div>
                <div className="divSubTitle"><S.subTitle>Desde 2021, o GCB Academy tem ajudado pessoas a crescerem profissionalmente.</S.subTitle></div>
                <div><Button  content="Vamos Explorar!" visible></Button ></div>
            </S.Container>
        </S.TagSection>
    );
}