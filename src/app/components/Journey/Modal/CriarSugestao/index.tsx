"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/app/components/Button/Button";
import { GlobalModal } from "../GlobalModal";
import { InputContent, InputModal } from "../GlobalModal.styles";
import { getDatabase, ref, push, set } from "firebase/database";
import { toast } from "react-toastify";

interface ICreateSuggest {
  id?: React.Key;
  nameTable: string;
}

const createSuggestValidationSchema = zod.object({
  title: zod.string().nonempty("Insira o título"),
  description: zod.string().nonempty("Insira a descrição"),
});

type newSuggestData = zod.infer<typeof createSuggestValidationSchema>;

export function CriarSugestao({ id, nameTable }: ICreateSuggest) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<newSuggestData>({
    resolver: zodResolver(createSuggestValidationSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function handleSubmitNewSuggest(data: newSuggestData) {
    const formattedNameTable = `${nameTable
      .toUpperCase()
      .replace(/\s+/g, "_")
      .replace(/_+$/, "")}`;
    try {
      const db = getDatabase();
      const suggestListRef = ref(db, `${formattedNameTable}`);
      const newsuggestRef = push(suggestListRef);
      set(newsuggestRef, {
        id_suggest: id,
        titulo: data.title,
        descricao: data.description,
      });
      reset();
      toast.success("Sugestão adicionada com sucesso");
    } catch (erro) {
      toast.error("Ocorreu um erro");
    }
  }

  return (
    <GlobalModal titleModal="Criar uma sugestão">
      <form onSubmit={handleSubmit(handleSubmitNewSuggest)}>
        <InputModal>
          <InputContent
            placeholder="Título"
            style={{ paddingLeft: "1rem", paddingRight: "2.6rem" }}
            {...register("title")}
          />
        </InputModal>
        <textarea
          id="descricaoSugestao"
          className="textAreaCriarSugestao"
          cols={30}
          rows={10}
          placeholder="Descrição..."
          {...register("description")}
        ></textarea>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
            <Dialog.Close asChild>
              <Button
                content="Cancelar"
                styles={{ width: "100%", height: "56px", padding: "20px 0px" }}
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
