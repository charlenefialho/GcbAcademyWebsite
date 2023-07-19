
import React from "react";

import * as Dialog from "@radix-ui/react-dialog"
import { WarningCircle } from "@phosphor-icons/react";
import { VisualizarSugestao } from "./VisualizarSugestao";

interface ISuggest{
    titleSuggest: string
}

export function Suggest({titleSuggest} : ISuggest){
    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="buttonSugestao" >
                <div>
                  <WarningCircle size={24} />
                  {titleSuggest}
                </div>
                <div>
                  <p>Nome</p>
                </div>
              </button>
            </Dialog.Trigger>
            <VisualizarSugestao />
          </Dialog.Root>
    );
}