'use client'  

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import { MenuMobile } from './components/menuMobile/MenuMobile';

import { Introducao} from './components/introducao/Introducao';
import bgImage from "./assets/img/bgImage.png"

export default function Home() {

  const [menuIsVsible, setMenuIsVisible] = useState(true);

  /*
  <MenuMobile
        menuIsvisible={menuIsVsible}
        setMenuIsVisible={setMenuIsVisible}
      />
  */
  return (
    <>
      <Image src={bgImage} alt="fundo"/>
    </>
  )
}
