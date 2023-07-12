import { styled } from "styled-components";
import Image from "next/image";

export const DivAvatar = styled.div`
    
`

export const ContainerReviews = styled.section`
  margin-top: 90px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 2vw;
    margin-right: 2vw;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const TitleReviews = styled.h3`
  color: var(--beige-800);
  text-align: center;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 2vw;
    margin-right: 2vw;
  }
`;
export const ContainerCard = styled.section`
  width: 400px;
  height: 255px;
  display: flex;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 2.794929027557373px 27.75286293029785px 0px
      rgba(41, 50, 65, 0.02),
    0px 6.7166032791137695px 52.79621124267578px 0px rgba(41, 50, 65, 0.03),
    0px 12.646767616271973px 77.73407745361328px 0px rgba(41, 50, 65, 0.04),
    0px 22.55967140197754px 107.91031646728516px 0px rgba(41, 50, 65, 0.05),
    0px 42.19538497924805px 157.30630493164062px 0px rgba(41, 50, 65, 0.06),
    0px 101px 302px 0px rgba(41, 50, 65, 0.08);
`;


export const AvatarCard = styled(Image)`
    width: 66px;
    height: 66px;
    border-radius: 66px;

`

export const DivContent = styled.div`
    
`

export const DivStar = styled.div`
    width: 98px;
    height: 18px;
`
