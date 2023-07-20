import React from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { WarningCircle } from "@phosphor-icons/react";
import { VisualizarSugestao } from "./VisualizeSuggestion";

export interface ISuggest {
  idSuggest: React.ReactNode;
  titleSuggest: string;
  description: string;
  author: string;
}

export function Suggest({
  idSuggest,
  titleSuggest,
  description,
  author,
}: ISuggest) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="buttonSugestao">
          <div>
            <WarningCircle size={24} />
            {titleSuggest}
          </div>
          <div>
            <p>Nome</p>
          </div>
        </button>
      </Dialog.Trigger>
      <VisualizarSugestao
        idSuggest={idSuggest}
        titleSuggest={titleSuggest}
        description={description}
        author={author}
      />
    </Dialog.Root>
  );
}
