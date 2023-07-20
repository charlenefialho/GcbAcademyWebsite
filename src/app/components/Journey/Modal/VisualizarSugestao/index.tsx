"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GlobalModal } from "../GlobalModal";
import { WarningCircle } from "@phosphor-icons/react";
import { Button } from "@/app/components/Button/Button";
import { ISuggest } from "../../../Modal/Suggestion/Suggest";

export function VisualizarSugestao({
  idSuggest,
  titleSuggest,
  description,
  author,
}: ISuggest) {
  return (
    <GlobalModal titleModal="Sugestão">
      <div style={{ width: "100%", textAlign: "left" }}>
        <p>Título: {titleSuggest}</p>
      </div>
      <div style={{ width: "100%", textAlign: "left" }}>
        <p>Autor: {author}</p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <span
          style={{
            width: "3rem",
            height: "3rem",
            padding: "0.625rem",
            borderRadius: "2.1875rem",
            background: " #DFDFE6",
          }}
        >
          <WarningCircle size={24} />
        </span>
        <p style={{ color: "#87898E" }}> {description}</p>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Dialog.DialogClose asChild>
          <Button
            content="Fechar"
            visible
            styles={{ width: "50%", height: "56px", padding: "20px 0px" }}
          />
        </Dialog.DialogClose>
      </div>
    </GlobalModal>
  );
}
