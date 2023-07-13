import Image from "next/image";
import { styled } from "styled-components";

export const DivCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
`

 export const CardContainer = styled.div`
  width: 277px;
  height: 456px;
  background-color: #f5f5f5;
  position: relative;
`;

 export const ImageCard = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

 export const MiniContainer = styled.div`
  width: 251px;
  height: 113px;
  background-color: #ffffff;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;








