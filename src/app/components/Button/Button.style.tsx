'use client'

import {css, styled} from "styled-components";
import { ButtonStyledProps } from "./Button";


export const  ButtonStyled = styled.button<ButtonStyledProps>`
    font-family: inherit;
    font-weight: 700;
    //margin-right: 100px;
    border-radius: var(--border-radius);
    background-color: var(--beige);
    width: 122px;
    height: 43px;
    border: none;
    color: var(--white);
  
    display: ${props => (props.visible ? 'block' : 'none')};

    @media (max-width: 768px) {
      display: ${props => (props.visible && 'block' )};
    }

    @media(min-width: 769px){
      display: ${props => (props.visible ? 'block': 'block' )};
    }



    
`