import React from "react";
import { Front } from "./styles";
import axios from 'axios';
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

//https://www.youtube.com/watch?v=xDVjbp8l96M&ab_channel=EmersonBroga
function CardFront({imageBackCard, imageUrl, imageCards}) {
  const [cardBack, setCardBack] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  
  const showModal = () =>{
   
     if(isModalVisible){
      return <Modal/>
    } 
   }
  const  turnCard = () => {
  
     setCardBack(!cardBack) 
     //setIsModalVisible(true)
    }

  if(cardBack === true) {
    return <Front onClick= {turnCard}
 
    src= {imageBackCard}/>
  }
  if(cardBack === false) {
    return <Modal><Front
    src = {imageUrl + imageCards }
    onClick={turnCard}
    ></Front></Modal>
    
  }
  else {
    return <Front onClick = {turnCard}
    src= {imageBackCard}/>
  }

}

export default CardFront
