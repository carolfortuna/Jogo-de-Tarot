import React from "react";
import { ModalBackgroud, ModalButton, ModalCard, ModalImage, TextBox } from "./styles";

function Modal({ imageUrl, imageCards, index}) {
console.log(imageCards, imageUrl)
  return (
    <div>
     <ModalBackgroud>
        
         <ModalCard>
            <ModalImage
              src= {imageUrl + imageCards[index].image}>
            </ModalImage>
            <TextBox>
            <h1>{imageCards[index].name}</h1>
           <h2>Significado:</h2>
           <h2>Pesquise no Google </h2>
        
            </TextBox>
            </ModalCard>
            <center>
            <ModalButton onClick={()=>window.location.reload(true)}>Jogar novamente</ModalButton>
            </center>
     </ModalBackgroud>
     
    </div>
  );
}

export default Modal
