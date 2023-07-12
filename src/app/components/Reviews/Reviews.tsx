import {
    AvatarCard,
  ContainerCard,
  ContainerReviews,
  DivAvatar,
  DivContent,
  DivStar,
  TitleReviews,
} from "./Reviews.styles";

import imgTeste from "../../assets/img/bgImage.png"

export function Reviews() {
  return (
    <ContainerReviews>
      <TitleReviews>Veja o que outros colaboradores dizem!</TitleReviews>
      <ContainerCard>
        <DivAvatar>
            <AvatarCard src={imgTeste} alt=""/>
        </DivAvatar>
        <DivContent>
            <h5>Levi Ciarrochi</h5>
            <DivStar>Estrelas</DivStar>
            <p>Que oportunidade incrível,Consigo ver o futuro dos
            Academy brilhando aqui.Vejo que tem muito como
            melhorar, mas está indo</p>
        </DivContent>
      </ContainerCard>
    </ContainerReviews>
  );
}
