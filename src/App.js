import React, { useState ,useEffect} from "react";
import Card from "./components/Card/Card";
import {Front, Container} from "./components/Card/styles"
import Modal from "./components/Modal/Modal"
import axios from "axios";
import Header from "./components/Header/Header";

//https://www.youtube.com/watch?v=XcHNBMG1GQI&ab_channel=TheNetNinja  
//embaralhar cartas

//https://www.youtube.com/watch?v=Aeye2Wh5dEc&ab_channel=BenBrooke animação
//a div  do app tem que ter o tamanho de uma carta para poder chamar a função

function App() {
const url = "https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json"
const [imageUrl, setImageUrl] = useState()
const [imageCards, setImageCards] = useState([])
const [imageBackCard, setImageBackCard] = useState()


  const getImage = () => {
    
    axios.get(`${url}`)
    .then((res) => {
      setImageUrl(res.data.imagesUrl) 
      setImageBackCard(res.data.imageBackCard)
      setImageCards(res.data.cards)
      console.log("imagecards",imageCards) 
      console.log(imageUrl)     
    })
    .catch((err) => {
        alert(err.message)
    })
  }

  useEffect(() => {
    getImage()
    shuffleArray(imageCards)
  },[imageUrl]);
  
  
  function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}

 
  const renderCards = shuffleArray(imageCards).map((_, index) =>{

      return <Card 
      index={index}
      imageBackCard = {imageBackCard}
      imageCards = {imageCards}
      imageUrl = {imageUrl}
      />
      
    
   
 })


  return (
   
    <Container>
    <Header/>
  {renderCards}


  
    </Container>
  );
}

export default App
