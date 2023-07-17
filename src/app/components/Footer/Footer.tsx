import * as S from "./Footer.styles";
import waveFooter from "../../assets/svg/wave-footer.svg";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { LogoGcb } from "../LogoGcb/LogoGcb";

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
              <li>
                <a href="#">
                  <FacebookLogo size={28} color="#ffff" weight="fill" />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramLogo size={28} color="#ffff" weight="fill" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <TwitterLogo size={28} color="#ffff" weight="fill" />{" "}
                </a>
              </li>
            </ul>
          </S.ColFooter>
          <S.ColFooter>
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="#"> Introdução </a>
              </li>
              <li>
                <a href="#"> Jornada </a>
              </li>
              <li>
                <a href="#"> Sobre nós </a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">NewsLetter</a>
              </li>
            </ul>
          </S.ColFooter>
          <S.ColFooter>
            <h4>Empresas</h4>
            <ul>
              <li>
                <a target="_blank" href="https://gcbinvestimentos.com/">
                  {" "}
                  GCB Investimentos
                </a>
              </li>
              <li>
                <a target="_blank" href="https://adiantesa.com/">
                  {" "}
                  Adiante Recebíveis{" "}
                </a>
              </li>
              <li>
                <a target="_blank" href="https://peerbr.com/">
                  {" "}
                  PeerBR{" "}
                </a>
              </li>
              <li>
                <a target="_blank" href="https://fmisa.com.br/">
                  {" "}
                  FMI
                </a>
              </li>
              <li>
                <a target="_blank" href="https://bmspartners.com.br/">
                  {" "}
                  BMS Partners
                </a>
              </li>
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
            developed with ♥ by Charlene Fialho. Thanks!!{" "}
          </p>
        </div>
      </S.ContainerFooter>
    </S.SectionFooter>
  );
}
