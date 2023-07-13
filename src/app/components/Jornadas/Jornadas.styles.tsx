import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";


export const SectionJourney = styled.section`
    position: relative; 
    background-color:var(--beige);
    width: 100%;
    height: 934px;
`


export const AliceCarouselStyled = styled(AliceCarousel)`

`;


export const WaveTop = styled(Image)`
    position: absolute;
    top: -19vh;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: 1;
`


export const WaveBottom = styled(Image)`
    position: absolute;
    bottom: -19vh;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: 1;
`