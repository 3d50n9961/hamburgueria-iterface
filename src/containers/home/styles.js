import { styled } from "styled-components";
import BannerHome from '../../assets/pexels.svg'
import Backgraund from '../../assets/Group 193.svg'


export const Banner = styled.div`
background-image: url( ${BannerHome} );
background-size: Banner;
background-position: center;
width: 100vw;
height: 200px;
h1{
    font-family: "Road Rage", serif;
    font-size: 80px;
    color: #9758a9;
    position: absolute;
    right:5%;
    top:5%;




}

`
export const Conteiner= styled.section`
background-image: url( ${Backgraund} );
background-size: Conteiner;
background-position: center;
width: 100vw;
height: 100vh;

`
export const Content = styled.div`
width: 100vw;

`



