"use client";

import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { getDatabase, ref, child, onValue, off } from "firebase/database";

import { IconSpan, InputContent, InputModal } from "../Modal.styles";
import { GlobalModal } from "../GlobalModal/GlobalModal";
import { CreateSuggestion } from "../Suggestion/CreateSuggestion";
import { Suggest } from "../Suggestion/Suggest";

export interface IModalJourneyProps {
  id: React.Key;
  titleModal: string;
  contentTextModal: string;
}

export interface ISuggestion {
  id_suggest: string;
  titulo: string;
  descricao: string;
  author: string;
}

export function ModalJourney({
  id,
  titleModal,
  contentTextModal,
}: IModalJourneyProps) {
  const [sugestoes, setSugestoes] = useState<ISuggestion[]>([]);
  const formattedNameTable = `${titleModal
    .toUpperCase()
    .replace(/\s+/g, "_")
    .replace(/_+$/, "")}`;

  async function createListSuggestion() {
    const db = await ref(getDatabase());
    try {
      onValue(child(db, formattedNameTable), (snapshot) => {
        const suggestionData = snapshot.val();
        if (suggestionData) {
          const sugestoesList: ISuggestion[] = Object.keys(suggestionData).map(
            (key) => ({
              id_suggest: key,
              titulo: suggestionData[key].titulo,
              descricao: suggestionData[key].descricao,
              author: suggestionData[key].author,
            })
          );
          setSugestoes(sugestoesList);
        } else {
          console.log("Nenhum dado encontrado");
        }
      });
    } catch (error) {
      console.log("Erro ao obter os dados:", error);
    }
  }

  useEffect(() => {
    createListSuggestion();
    return () => {
      off(child(ref(getDatabase()), formattedNameTable));
    };
  }, [formattedNameTable]);

  return (
    <GlobalModal titleModal={titleModal}>
      <p className="contentText">{contentTextModal}</p>
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
              className="CreateSuggestion"
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "0.625rem",
                backgroundColor: "var(--beige)",
                border: "2px solid var(--beige)",
                color: "var(--white)",
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              Criar Sugestão
            </button>
          </Dialog.Trigger>

          <CreateSuggestion id={id} nameTable={titleModal} />
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
        {sugestoes.map((prop) => {
          return (
            <Suggest
              key={prop.id_suggest}
              idSuggest={prop.id_suggest}
              titleSuggest={prop.titulo}
              description={prop.descricao}
              author={prop.author}
            />
          );
        })}
      </div>
    </GlobalModal>
  );
}
