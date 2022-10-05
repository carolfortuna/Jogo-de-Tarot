import React from "react";
import {Back} from "./styles"
import axios from 'axios';
import { useState, useEffect } from "react";

function CardBack() {
const url = "https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json"
const [image, setImage] = useState()

  const getImage = () => {
    axios.get(`${url}`)
    .then((res) => {
        return setImage(res.data.imageBackCard)
           
    })
    .catch((err) => {
        alert(err.message)
    })
  }

  useEffect(() => {
    getImage()
  },image);
  return (
    <div>
     <Back
     src = {image}
     />
     
    </div>
  );
}

export default CardBack
