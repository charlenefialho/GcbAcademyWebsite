'use client';

import React from "react";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";

import * as S from "./Footer.styles";
import { LogoGcb } from "../LogoGcb/LogoGcb";
import waveFooter from "../../assets/svg/wave-footer.svg";


const socialMediaLinks = [
  {id:1, icon: <FacebookLogo size={28} color="#ffff" weight="fill" />, url: "#" },
  {id:2, icon: <InstagramLogo size={28} color="#ffff" weight="fill" />, url: "#" },
  {id:3, icon: <TwitterLogo size={28} color="#ffff" weight="fill" />, url: "#" },
];

const navigationLinks = [
  { label: "Introdução", url: "#" },
  { label: "Jornada", url: "#" },
  { label: "Sobre nós", url: "#" },
  { label: "Reviews", url: "#" },
  { label: "NewsLetter", url: "#" },
];

const companyLinks = [
  { label: "GCB Investimentos", url: "https://gcbinvestimentos.com/" },
  { label: "Adiante Recebíveis", url: "https://adiantesa.com/" },
  { label: "PeerBR", url: "https://peerbr.com/" },
  { label: "FMI", url: "https://fmisa.com.br/" },
  { label: "BMS Partners", url: "https://bmspartners.com.br/" },
];

export function Footer() {
  return (
    <S.SectionFooter>
      <S.BackgroundWave src={waveFooter} alt="wave" />
      <S.ContainerFooter>
        <S.RowFooter>
          <S.ColFooter>
            <div className="divLogo">
              <LogoGcb light />
            </div>
            <ul className="redesSociais">
              {socialMediaLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url}>{link.icon}</a>
                </li>
              ))}
            </ul>
          </S.ColFooter>
          <S.ColFooter>
            <h4>Navegação</h4>
            <ul>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </S.ColFooter>
          <S.ColFooter>
            <h4>Empresas</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.url}>
                  <a target="_blank" href={link.url}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </S.ColFooter>
          <S.ColFooter>
            <h4>Contato</h4>
            <ul>
              <li>
                <p className="contact"> (11) 2500-4699 </p>
              </li>
              <li>
                <p className="contact"> academy@gcb.investimentos.com </p>
              </li>
            </ul>
          </S.ColFooter>
        </S.RowFooter>
        <div className="divThanks">
          <hr />
          <p className="thanks">
            developed with ♥ by Charlene Fialho. Thanks!!
          </p>
        </div>
      </S.ContainerFooter>
    </S.SectionFooter>
  );
}
