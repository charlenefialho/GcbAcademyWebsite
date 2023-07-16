import { ButtonStyled } from "./Button.style";
import { ButtonHTMLAttributes} from "react";



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  visible?: boolean;
  styles?: Record<string, string>;
}

export function Button({ content , visible, styles, onClick}: ButtonProps) {
  return <ButtonStyled  visible={visible} styles={styles} onClick={onClick}>{content}</ButtonStyled>;
}
