import React, { useState } from "react";
import CardBack from "./components/CardBack/CardBack"
import CardFront from "./components/CardFront/CardFront"

//https://www.youtube.com/watch?v=XcHNBMG1GQI&ab_channel=TheNetNinja  
//embaralhar cartas

//https://www.youtube.com/watch?v=Aeye2Wh5dEc&ab_channel=BenBrooke animação
//a div  do app tem que ter o tamanho de uma carta para poder chamar a função

function App() {

  const [cardBack, setCardBack] = useState(true)
  
  const  turnCard = () => {
  return   setCardBack(!cardBack)
  }

  const faceCard = () =>{
    if(cardBack === true) {
      return <CardBack onClick= {turnCard}/>
    }
    if(cardBack === false) {
      return <CardFront 
      
      onClick={turnCard}/>
    }
    else {
      return <CardBack onClick = {turnCard}/>
    }
  }

  return (
    <div onClick={turnCard}>
     
  {faceCard()}

  
    </div>
  );
}

export default App
