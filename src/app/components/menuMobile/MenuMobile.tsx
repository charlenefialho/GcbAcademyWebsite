'use client'
import {Container} from "./styles"
import {X} from "@phosphor-icons/react"

interface MenuMobileProps{
    menuIsVisible: boolean
    setMenuIsVisible: () => boolean
}

export function MenuMobile({menuIsVisible, setMenuIsVisible} : MenuMobileProps){
    <Container>
        <X size={45} />
        <nav>
            <a href="#">link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
        </nav>
    </Container>
    
}