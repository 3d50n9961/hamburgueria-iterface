import {Link} from "react-router-dom"
import { styled } from "styled-components";
import Bacgraundbanner from "../../assets/backgraundbanner.jpg";
import Backgraund from '../../assets/Group 193.svg'


export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 480px;
background-image: url( ${Bacgraundbanner} );
background-color: #1f1f1f;
background-size: 100% 140%;

background-position: center; 
background-repeat: no-repeat; 
position: relative;

h1{
    font-family: "Road Rage", serif;
    font-size: 80px;
    line-height: 65px;
    color: #ffffffff;
    position: absolute;
    height: 20%;
    top: 15%;

    span{
    display: block;
    color: #ffffffff;
    font-size: 20px;
    }


}

`
export const Conteiner= styled.div`
background-image: url( ${Backgraund} );
background-position: center;
width: 100vw;


`

export const Categorymenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
margin: 30px auto 20px auto;


`;


export const Categorybutton = styled(Link)`
text-decoration: none;
cursor: pointer;
background:none;
color: #9758a6;
font-size: 24px;
font-weight: bold;
padding-bottom: 10px;
line-height: 20px;
border-bottom: 3px solid #9758a6;



`

export const Conteinnerproducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 60px; 
  width: 90%;
  max-width: 1400px;
  margin: 50px auto 0; 
  
 


`