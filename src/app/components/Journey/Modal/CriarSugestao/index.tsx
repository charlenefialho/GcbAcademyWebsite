'use client';
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "@/app/components/Button/Button";
import { GlobalModal } from "../GlobalModal";
import { InputContent, InputModal } from "../GlobalModal.styles";

interface ICreateSuggest{
  id?:React.Key;
  nameTable: string
}

export function CriarSugestao({id, nameTable}: ICreateSuggest) {
  return (
    <GlobalModal titleModal="Criar uma sugestão">
      <form action="">
        <InputModal>
          <InputContent
            placeholder="Título"
            style={{ paddingLeft: "1rem", paddingRight: "2.6rem" }}
          />
        </InputModal>
        <textarea
          name="descricaoSugestao"
          id="descricaoSugestao"
          className="textAreaCriarSugestao"
          cols={30}
          rows={10}
          placeholder="Descrição..."
        ></textarea>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
            <Dialog.Close asChild>
                <Button
                  content="Cancelar"
                  styles={{ width: "100%", height: "56px", padding: "20px 0px"}}
                  visible
                  light
                />
            </Dialog.Close>
            <Button
              type="submit"
              content="Criar"
              visible
              styles={{ width: "100%", height: "56px", padding: "20px 0px" }}
            />
          </div>
        </div>
      </form>
    </GlobalModal>
  );
}
