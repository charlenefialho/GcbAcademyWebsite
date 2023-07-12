'use client'

import {styled} from "styled-components";


export const  ButtonStyled = styled.button`
    margin-right: 100px;
    border-radius: var(--border-radius);
    background-color: var(--beige);
    width: 122px;
    height: 43px;
    border: none;
    color: var(--white);

    @media (max-width: 768px) {
        display: none;
        
    }


`