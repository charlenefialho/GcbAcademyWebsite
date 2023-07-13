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

export const Containerjourneys = styled.section`
    width: 100%;
    margin-top: 90px;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-bottom: 3.31rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`


export const WaveTop = styled(Image)`
    position: absolute;
    top: -17vh;
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