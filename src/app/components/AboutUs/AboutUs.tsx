"use client";

import React from "react";

import * as S from "./AboutUs.styles";
import imgAboutUs from "../../assets/svg/about-us.svg";

export function SobreNos() {
  return (
    <S.SectionAboutUs>
      <div className="divTitle">
        <S.TitleAboutUs>Sobre nós</S.TitleAboutUs>
      </div>
      <S.ContainerAbouUs>
        <S.SectionTextAboutUs>
          <div className="contentTextAboutUs">
            <div>
              <p>
                O{" "}
                <span>
                  <strong>GCB Academy</strong>
                </span>{" "}
                nasceu da <strong>necessidade</strong> de
                <strong> pessoas qualificadas</strong> na área de tecnologia do
                Grupo GCB a partir do alinhamento cultural e técnico com a
                empresa.
              </p>
            </div>
            <div>
              <p>
                Com o Academy abrimos as portas para o futuro, preparando os
                profissionais através de muita <strong>prática</strong> e{" "}
                <strong>cenários reais</strong>, a qual impusionamos o
                crescimento e evolução.{" "}
              </p>
            </div>
            <div>
              <p>
                Prepare-se para explorar novas fronteiras, desafiar limites e
                alcançar o próximo nível do seu potencial.
              </p>
            </div>
          </div>
        </S.SectionTextAboutUs>
        <S.DivImgAboutUS>
          <S.ImgAboutUsStyled src={imgAboutUs} alt="pessoa pesquisando" />
        </S.DivImgAboutUS>
      </S.ContainerAbouUs>
    </S.SectionAboutUs>
  );
}
