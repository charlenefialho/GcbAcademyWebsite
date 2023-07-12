
import{ButtonStyled} from "./style";

interface ButtonStyledProps{
    content: string
}

export function Button({content}: ButtonStyledProps){
    
    return(
        <ButtonStyled>{content}</ButtonStyled>
    )
}