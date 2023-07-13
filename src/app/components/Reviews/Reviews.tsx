import React from 'react';



import {
  AliceCarouselStyled,
  ContainerReviews,
  TitleReviews,
} from "./Reviews.styles";

import { Card } from "./Card/Card";

const items = [
  <Card/>,
   <Card/>,
   <Card/>,
   <Card/>,
   <Card/>,
   <Card/>
];

const itemsVisibles = {
  768: {
    items: 1,
    
},
1024: {
    items: 2,
    itemsFit: 'contain',
},
1440:{
    items: 3,
    itemsFit: 'contain',
}
}


export function Reviews() {
  return (
    <ContainerReviews>
      <TitleReviews>Veja o que outros colaboradores dizem!</TitleReviews>
        <AliceCarouselStyled disableButtonsControls items={items} responsive={itemsVisibles}/>
      
        
    </ContainerReviews>
  );
}
