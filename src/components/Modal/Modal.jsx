import React from "react";
import { ModalBackgroud, ModalButton, ModalCard } from "./styles";

function Modal({ imageUrl, imageCards, index}) {
console.log(imageCards, imageUrl)
  return (
    <div>
     <ModalBackgroud>
         <ModalButton onClick={()=>window.location.reload(true)}>Jogar novamente</ModalButton>
         <ModalCard
         src= {imageUrl + imageCards[index].image}
         
         >
       
         </ModalCard>
     </ModalBackgroud>
     
    </div>
  );
}

export default Modal
