import styled from "styled-components"

export const HeaderDiv = styled.div `
  margin-top: 0px;
  padding: 10px;
  background-color: rgba(15, 31, 55 ,0);
  color: aliceblue;
  text-align: center;
  font-family: 'Great Vibes', cursive;
  font-size: 30px;
  margin-bottom: -30px;
`
export const Title = styled.h1 `
  & img {
    height: 80px;
    width: 80px;  
    margin-inline: 20px;
  
  }
  margin-top: 0px;
  font-size: 80px;
  color: midnightblue;
  margin-bottom: -30px;
  text-align: center;
  font-family: 'Great Vibes', cursive;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #122A3F, 0 0 40px #122A3F, 0 0 50px #122A3F, 0 0 60px #122A3F, 0 0 70px #122A3F;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 50px;

& img{
 display: none;
}
}
`