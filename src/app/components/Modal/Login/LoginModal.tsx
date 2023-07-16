import React, { useState } from "react";
import Image from "next/image";


import { ModalContainer } from "./LoginModal.styles";
import xCircle from "../../../assets/svg/icon-x-circle.svg";

interface Modal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export function LoginModal({isOpen, setOpen}: Modal) {

    if(isOpen){
        return (
            <ModalContainer >
              <div className="modal-content">
                <h1>titulo</h1>
                <p>descrição</p>
                <button onClick={()=> setOpen(!isOpen)}><Image src={xCircle} alt="" /></button>
              </div>
            </ModalContainer>
          );
    }
  
}
