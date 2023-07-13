import Image from "next/image";
import { styled } from "styled-components";


export const SectionFooter = styled.section`
    position: relative;
    margin-top: 35vh;
    width: 100%;
    height: 60vh;
`

export const ContainerFooter = styled.section`
    width: 100%;
    height: 60vh;
    background-color: var(--beige);
`

export const BackgroundWave = styled(Image)`
    position: absolute;
    top: -30vh;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: -1;
`