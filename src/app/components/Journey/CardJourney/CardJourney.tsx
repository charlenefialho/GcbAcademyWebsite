import * as S from "./CardJourney.styles";
import img from "../../../assets/svg/phone.svg";




export function CardJourney(){
    return (
        <S.DivCard>
            <S.CardContainer>
                <S.CardContent>
                    <S.ImageCard src={img} alt="Card Image" />
                    <S.MiniContainer>
                    <div>
                        <S.TitleMiniContainer>Mobile Developer</S.TitleMiniContainer>
                        <S.Text>41 Sugestões</S.Text>
                        <S.StarsContainer>*****</S.StarsContainer>
                    </div>
                    </S.MiniContainer>
                </S.CardContent>
            </S.CardContainer>
                
        </S.DivCard>
    );
}