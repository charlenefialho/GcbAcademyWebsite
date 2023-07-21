"use client";

import React from "react";

import * as S from "./Card.styles";
import imgTeste from "../../../assets/img/bgImage.png";
import Image from "next/image";
import stars from "../../../assets/svg/stars.svg";

export function Card() {
  return (
    <S.DivCard>
      <div>
        <S.ContainerCard>
          <S.AvatarCard
            src={imgTeste}
            alt="Foto"
            width={66}
            height={66}
            layout="fixed"
          />
          <div>
            <S.AuthorName>levi ciarrochi</S.AuthorName>
            <span><Image src={stars} alt=""/></span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              sint optio similique a quo quaerat ipsam hic nemo ad totam, itaque
              assumenda quas at, culpa illum quasi, iste aut harum.
            </p>
          </div>
        </S.ContainerCard>
      </div>
    </S.DivCard>
  );
}
