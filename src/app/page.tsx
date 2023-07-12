"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";


import bgImage from "./assets/img/bgImage.png";
import {MenuMobile} from "./components/MenuMobile/MenuMobile"


export default function Home() {
  return (
    <>
      <Image src={bgImage} alt="prédio de fundo" />
    </>
  );
}
