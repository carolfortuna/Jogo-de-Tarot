import React from "react";
import {Back, Background, ModalBox} from "./styles"
import axios from 'axios';
import { useState, useEffect } from "react";

function Modal() {

  return (
    <Background>
    <ModalBox>
     
    <h1>Modal</h1>
     <button>X</button>
    </ModalBox>
    </Background>
  );
}

export default Modal
