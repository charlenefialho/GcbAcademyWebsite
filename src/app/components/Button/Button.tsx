import { ButtonStyled } from "./Button.style";

export interface ButtonStyledProps {
  content: string;
  visible?: boolean;
}

export function Button({ content , visible}: ButtonStyledProps) {
  return <ButtonStyled content={content} visible={visible}>{content}</ButtonStyled>;
}
