"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";

import * as Dialog from "@radix-ui/react-dialog";
import { Container, Content,  Overlay } from "./ModalJourneyStyles";
import {  ModalHeader } from "../../Modal/Modal.styles";
import xCircle from "../../../assets/svg/icon-x-circle.svg";

export function ModalJourney() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Container>
          <ModalHeader>
            <h4>Web Developer</h4>
            <Dialog.Close>
            <Image src={xCircle} alt="fechar" />
            </Dialog.Close>
          </ModalHeader>
          <p>A jornada de web developer no GCB Academy é uma oportunidade emocionante de mergulhar no mundo do desenvolvimento web. Durante o programa, você vai adquirir as habilidades essenciais para criar sites e aplicativos incríveis, com React e Next.js aplicando tecnologias como Testing Library e Storybook.</p>
        </Container>
      </Content>
    </Dialog.Portal>
  );
}
