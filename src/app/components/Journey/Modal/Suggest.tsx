
import React from "react";

import * as Dialog from "@radix-ui/react-dialog"
import { WarningCircle } from "@phosphor-icons/react";
import { VisualizarSugestao } from "./VisualizarSugestao";

export interface ISuggest{
    idSuggest: React.ReactNode;
    titleSuggest: string;
    description: string;
}

export function Suggest({idSuggest,titleSuggest, description} : ISuggest){
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
            <VisualizarSugestao idSuggest={idSuggest} titleSuggest={titleSuggest} description={description}/>
          </Dialog.Root>
    );
}