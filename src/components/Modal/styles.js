import styled from "styled-components";


export const ModalImage = styled.img`
background-color: midnightblue;
height: 308px;
width: 150px;
margin: 40px 40px 10px 40px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
margin-inline: 82px;
}
`
export const ModalCard = styled.div`
background-color: #FBE599;
border-radius: 15px;

height: 380px;
width: 500px;
position: absolute;
top: 9%;
left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  display: flex;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 300px;
height: 550px;
display: block;
top: 3%;
}
`

export const ModalButton = styled.button`
margin-top: 500px;

	background:linear-gradient(to bottom, #2C5EB7 5%, #476e9e 100%);
	background-color:#2C5EB7;
	border-radius:8px;
	display:inline-block;
	
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	font-weight:bold;
	padding:13px 28px;
	text-decoration:none;
	text-shadow:0px 1px 0px #283966;
cursor: pointer;

:hover{
    background:linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
	background-color:#476e9e;
    box-shadow: 0px 10px 14px -7px #9fb4f2;
}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
margin-top:680px;
}
`

export const ModalBackgroud = styled.div`
background-color: rgba(1,1,1,0.85);
height: 170%;
width: 100%;
position: absolute;
z-index: 1;
top:0px;
left: 0px;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
height: 460%;
}
`
export const TextBox = styled.div`
display: block;
text-align: center;
font-family: 'Mali', cursive;
color: #235AB8;
margin-left: -20px;
`
