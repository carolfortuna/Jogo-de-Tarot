import React from "react";
import { Front } from "./styles";
import axios from 'axios';
import { useState, useEffect } from "react";


function CardFront() {
  const url = "https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json"
const [imageUrl, setImageUrl] = useState("")
const [imageCards, setImageCards] = useState([])

  const getImage = () => {
    axios.get(`${url}`)
    .then((res) => {
      setImageUrl(res.data.imagesUrl) 

      setImageCards(res.data.cards[2].image)  
      console.log(res.data) 
      console.log(res.data.cards[0].image)
      console.log(imageUrl)      
    })
    .catch((err) => {
        alert(err.message)
    })
  }

  useEffect(() => {
    getImage()
   // console.log(fullUrl)
   // const fullUrl= imageUrl.concat(imageCards)
  },[]);
  return (
    <div>

     {/* /* fullUrl.map((url)=> */}
        <Front
     src= {imageUrl + imageCards}
     />
    
    </div>
  );
}

export default CardFront
