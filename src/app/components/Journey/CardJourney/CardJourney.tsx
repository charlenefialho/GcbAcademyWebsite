"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import * as S from "./CardJourney.styles";
import Image from "next/image";
import stars from "../../../assets/svg/stars.svg";
import {
  IModalJourneyProps,
  ModalJourney,
} from "../../Modal/Journey/ModalJourney";


interface CardJourneyProps extends IModalJourneyProps {
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
  contentTextModal,
}: CardJourneyProps) {
  const renderDialogContent = () => (
    <ModalJourney
      id={id}
      titleModal={titleModal}
      contentTextModal={contentTextModal}
    />
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <S.DivCard>
          <S.CardContainer style={{ cursor: "pointer" }}>
            <S.CardContent style={{ backgroundColor: bgColor }}>
              <S.ImageCard src={urlImg} alt="Card Imagem" />
              <S.MiniContainer>
                <div>
                  <S.TitleMiniContainer>{contentTitle}</S.TitleMiniContainer>
                  <S.Text>{content}</S.Text>
                  <S.StarsContainer><Image src={stars} alt=""/></S.StarsContainer>
                </div>
              </S.MiniContainer>
            </S.CardContent>
          </S.CardContainer>
        </S.DivCard>
      </Dialog.Trigger>

      {renderDialogContent()}
    </Dialog.Root>
  );
}
