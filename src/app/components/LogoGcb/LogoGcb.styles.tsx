'use client'

import Image from "next/image";

import { styled } from "styled-components";

export const ImageStyledProps = styled(Image)`
    @media (min-width: 768px) {
        margin-left: 4vw;
        margin-top: 20px;
        margin-bottom: 21px;
        width: calc(10rem + 15px);
        height: calc(3rem + 4px);
    }
    
    @media (max-width: 768px) {
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 21px;
        width: calc(10rem + 15px);
        height: calc(3rem + 4px);
    }
    
`