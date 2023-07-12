'use client'


import { styled } from "styled-components";
import Image from "next/image";
import { Button } from "../Button/Button";


export const TagSection = styled.section`
position: relative;
height: calc(100vh - (6rem - 3px));
width: 100%;
`

export const BackgroundImage = styled(Image)`
    background-size: cover;

`

export const Title = styled.h1`
    color: var(--beige);
    font-family: Arial, Helvetica, sans-serif;
    font-size: calc(3rem + 0.125px);
    font-style: normal;
    font-weight: 700;
    line-height: 60px;

    display: flex;
    width: 584px;
    flex-direction: column;
    flex-shrink: 0;

    position: absolute;
    top: 0;
    left: 0;
` 

export const subTitle = styled.p`
    color: var(--black);
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    top: 10vh;
    left: 0;

    display: flex;
    width: 360px;
    flex-direction: column;
    flex-shrink: 0;
`

export const ButtonStyled = styled(Button)`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 10vh;
    left: 0;
` 
