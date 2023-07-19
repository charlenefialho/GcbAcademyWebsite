"use client";

import React, { useState, FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { IconSpan, InputContent, InputModal } from "../../Modal/Modal.styles";
import { MagnifyingGlass, WarningCircle } from "@phosphor-icons/react";
import { GlobalModal } from "./GlobalModal";
import { CriarSugestao } from "./CriarSugestao";
import { VisualizarSugestao } from "./VisualizarSugestao";

export function ModalJourney() {
  return (
    <GlobalModal titleModal="Web Development">
      <p className="contentText">
        A jornada de web developer no GCB Academy é uma oportunidade emocionante
        de mergulhar no mundo do desenvolvimento web. Durante o programa, você
        vai adquirir as habilidades essenciais para criar sites e aplicativos
        incríveis, com React e Next.js aplicando tecnologias como Testing
        Library e Storybook.
      </p>
      <InputModal>
        <InputContent
          placeholder="Busque por uma sugestão"
          style={{ paddingLeft: "1rem", paddingRight: "2.6rem" }}
        />
        <IconSpan style={{ left: "87%" }}>
          <MagnifyingGlass size={24} />
        </IconSpan>
      </InputModal>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <Dialog.Root>
          <Dialog.Trigger asChild>
              <button
              content="Criar Sugestão"
              className="criarSugestao"
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "0.625rem",
                backgroundColor: "var(--beige)",
                border: "2px solid var(--beige)",
                color: "var(--white)",
                fontFamily: "inherit",
              }}
            >
              Criar Sugestão
            </button>
          </Dialog.Trigger>
              <CriarSugestao/>
        </Dialog.Root>

        
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <p>Sugestões</p>
        <button>A-z</button>
      </div>

      <div className="listaSugestoes">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="buttonSugestao">
              <div><WarningCircle size={24} />Assunto</div>
              <div>
                <p>Nome</p>
              </div>
            </button>
          </Dialog.Trigger>
            <VisualizarSugestao/>
        </Dialog.Root>
        <button className="buttonSugestao">
          <div><WarningCircle size={24} />Assunto</div>
          <div>
            <p>Nome</p>
          </div>
        </button>
      </div>
    </GlobalModal>
  );
}
