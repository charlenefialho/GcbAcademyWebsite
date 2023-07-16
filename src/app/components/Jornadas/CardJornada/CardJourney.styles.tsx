import Image from "next/image";
import { styled } from "styled-components";

export const DivCard = styled.div`
  width: 100%;
  height: 31.25rem;
  display: flex;
  justify-content: center;
  
`

 export const CardContainer = styled.div`
  width: 277px;
  height: 405px;
  position: relative;
`;

export const CardContent = styled.div`
  border-radius: 20px;
  background-color: #FFAC52;
  width: 100%;
  height: 90%;

`

 export const ImageCard = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
`;

 export const MiniContainer = styled.div`
  border-radius: 20px;
  width: 251px;
  height: 113px;
  background-color: var(--white);
  position: absolute;
  top: 18rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;


export const TitleMiniContainer = styled.h3`
  font-family: inherit;
  color: var(--beige-800);
  margin: 0;
`;

export const Text = styled.p`
  margin: 0;
`;

export const StarsContainer = styled.div`
  width: 98px;
  height: 18px;
  
`;








