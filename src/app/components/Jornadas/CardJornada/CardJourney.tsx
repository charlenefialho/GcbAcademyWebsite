import * as S from "./CardJourney.styles";
import img from "../../../assets/svg/phone.svg";




export function CardJourney(){
    return (
        <S.DivCard>
            <S.CardContainer>
                <S.MiniContainer>
                    <h3>oi</h3>
                </S.MiniContainer>
                <S.ImageCard src={img} alt="Card Image" />
            </S.CardContainer>
        </S.DivCard>
    );
}