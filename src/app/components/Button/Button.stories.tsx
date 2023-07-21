// Importações necessárias para criar as histórias
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { buttonHeaderStyles } from "../Header/Header.styles";
import {poppins} from './../../layout';

export default{
  title:'Components/Button',
  component: Button,
  args:{
  }
  
}as Meta<ButtonProps>

export const Default:StoryObj<ButtonProps> = {
  args:{
    content:'default',
    styles:buttonHeaderStyles,
    light:false,
    visible:true,
  }
}

export const HeaderInvisible:StoryObj<ButtonProps> = {
  args:{
    content:'Header',
    styles:buttonHeaderStyles,
    light:false,
    visible:false,
  }
}


export const Light:StoryObj<ButtonProps> = {
  args:{
    content:'Light',
    styles:buttonHeaderStyles,
    light:true,
    visible:true,
  }
}

