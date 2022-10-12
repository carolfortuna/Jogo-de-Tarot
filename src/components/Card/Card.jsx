import React from "react";
import { Front } from "./styles";
import axios from 'axios';
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

//https://www.youtube.com/watch?v=JSePZ82OLaw&ab_channel=FlorinPop
//https://www.youtube.com/watch?v=xDVjbp8l96M&ab_channel=EmersonBroga
function Card({imageBackCard, imageUrl, imageCards, index}) {

  //Começa com as cartas viradas pra baixo e o model false
  const [isModalVisible, setIsModalVisible] = useState(false)
  
  //ao clicar na carta o modal aparece 
  const  turnCard = () => {
     setIsModalVisible(!isModalVisible)
    }

  if(isModalVisible === false) {
    return <Front onClick={turnCard}
 
    src= {imageBackCard}/>
  }
  if(isModalVisible === true) {
    return <div><Modal   imageUrl={imageUrl}
     imageCards={imageCards}
    index = {index}
    >
      <Front
    src={imageBackCard}
    onClick={turnCard}
    ></Front></Modal
    
    >
    </div>
  }
  else {
    return <Front onClick={turnCard}
    src={imageBackCard}/>
  }

}

export default Card
