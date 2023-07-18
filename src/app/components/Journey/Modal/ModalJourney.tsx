"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";

import * as Dialog from "@radix-ui/react-dialog";
import { Container, Content,  Overlay } from "./ModalJourneyStyles";
import {  IconSpan, InputContent, InputModal, ModalHeader } from "../../Modal/Modal.styles";
import xCircle from "../../../assets/svg/icon-x-circle.svg";
import { MagnifyingGlass, XCircle } from "@phosphor-icons/react";
import { Button } from "../../Button/Button";

export function ModalJourney() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Container>
          <ModalHeader>
            <h4>Web Developer</h4>
            <Dialog.Close>
            <XCircle size={24}/>
            </Dialog.Close>
          </ModalHeader>
          <p>A jornada de web developer no GCB Academy é uma oportunidade emocionante de mergulhar no mundo do desenvolvimento web. Durante o programa, você vai adquirir as habilidades essenciais para criar sites e aplicativos incríveis, com React e Next.js aplicando tecnologias como Testing Library e Storybook.</p>
          <InputModal>
            <InputContent placeholder="Busque por uma sugestão" style={{paddingLeft: "1rem" ,paddingRight:"2.6rem"}}/>
              <IconSpan style={{left: '25rem'}}>
              <MagnifyingGlass size={24} />
              </IconSpan>
          </InputModal>
          <div style={{display: 'flex', justifyContent:'flex-end', width: '100%'}}>
            <Button content="Criar Sugestão"  styles={{height:'2.5rem', width: '7.5rem'}}/>
          </div>
          <div style={{display: 'flex', justifyContent:'space-between', width: '100%'}}>
            <p>Sugestões</p>
            <button>sla</button>
          </div>
        </Container>
      </Content>
    </Dialog.Portal>
  );
}
