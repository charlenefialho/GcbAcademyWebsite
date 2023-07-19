"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import * as S from "./CardJourney.styles";
import { RegisterModal } from "../../Modal/Register/RegisterModal";
import { IModalJourneyProps, ModalJourney } from "../Modal/ModalJourney";
import { infoCards } from "../Journey";



interface cardJourney extends IModalJourneyProps{
  id: React.Key;
  urlImg: string;
  contentTitle: string;
  content: string;
  bgColor: string;

}

export function CardJourney({
  id,
  urlImg,
  contentTitle,
  content,
  bgColor,
  titleModal,
  contentTextModal
}: cardJourney) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <S.DivCard>
          <S.CardContainer>
            <S.CardContent style={{ backgroundColor: bgColor }}>
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
      </Dialog.Trigger>

      <ModalJourney id={id} titleModal={titleModal} contentTextModal={contentTextModal}/>
    </Dialog.Root>
  );
}
