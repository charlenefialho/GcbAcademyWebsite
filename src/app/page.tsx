"use client";

import { Footer } from "./components/Footer/Footer";
import { Introduction } from "./components/Introduction/Introduction";
import { Jornada } from "./components/Jornadas/Jornadas";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Reviews } from "./components/Reviews/Reviews";
import { SobreNos } from "./components/SobreNos/SobreNos";



export default function Home() {
  return (
    <>
      <Introduction/>
      <Jornada/>
      <SobreNos/>
      <Reviews/>
      <Newsletter/>
      <Footer/>
    </>
  );
}
