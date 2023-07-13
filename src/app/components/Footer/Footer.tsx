import * as S from "./Footer.styles";
import waveFooter from "../../assets/svg/wave-footer.svg";

export function Footer(){
    return(
        <S.SectionFooter>
             <S.BackgroundWave src={waveFooter} alt="wave"/>
            <S.ContainerFooter>
                
            </S.ContainerFooter>
        </S.SectionFooter>
    );
}