import React from "react";
import { HeaderDiv, Title } from "./styles";
import bolaDeCristal from "./bola-de-cristal.png"

function Header() {

  return (
    <HeaderDiv>
      <Title> 
        <img src={bolaDeCristal} alt="bola-de-cristal" />  
        Tarot da Carol Fortuna  
        <img src={bolaDeCristal} alt="bola-de-cristal" />
      </Title>
    <h2>Concentre-se e faça sua pergunta para o oráculo</h2>
    </HeaderDiv>
  );
}

export default Header
