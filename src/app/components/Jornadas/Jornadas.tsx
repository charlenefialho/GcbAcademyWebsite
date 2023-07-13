import { styled } from "styled-components";
import React from 'react';
import * as S from "./Jornadas.styles";
import ImgWaveTop from "../../assets/svg/wave-top.svg";
import ImgWaveBottom from "../../assets/svg/wave-bottom.svg";

const itemsVisibles = {
    768: {
      items: 1,
      
  },
  1024: {
      items: 2,
      itemsFit: 'contain',
  },
  1440:{
      items: 3,
      itemsFit: 'contain',
  }
  }
  

export function Jornada(){
    return(
        <S.SectionJourney>
            <S.WaveTop src={ImgWaveTop} alt="wave"/>
            <div>
            <h1>Veja o que outros colaboradores dizem!</h1>
                <S.AliceCarouselStyled disableButtonsControls />  
            </div>
            <S.WaveBottom src={ImgWaveBottom} alt="wave"/>
        </S.SectionJourney>
    );
}