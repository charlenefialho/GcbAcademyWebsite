"use client";

import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

import xCircle from "../../../assets/svg/icon-x-circle.svg";
import {
  Close,
  Container,
  Content,
  ModalHeader,
  Overlay,
} from "./GlobalModal.styles";

interface ModalProps {
  children: ReactNode;
  titleModal: string;
}

export function GlobalModal({ children, titleModal }: ModalProps) {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Container>
            <ModalHeader>
              <Dialog.Title className="titleModal">{titleModal}</Dialog.Title>
              <Close>
                <Image src={xCircle} alt="sair" width={24} height={24} />
              </Close>
            </ModalHeader>
            {children}
          </Container>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
}
