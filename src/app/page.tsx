'use client'  

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import { MenuMobile } from './components/menuMobile/MenuMobile';

import bgImage from "./assets/img/bgImage.png"
import { Header } from './components/Header';

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
      <Header/>
      <Image src={bgImage} alt="fundo"/>
    </>
  )
}
