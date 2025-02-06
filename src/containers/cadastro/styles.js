import { styled } from "styled-components";
import Backgraundlogin from "../../assets/backgraundlogin.svg"
import Backgraund from "../../assets/backgraund.svg"
import { Link as ReactLink } from "react-router-dom";


export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;

`
export const LeftContainer = styled.div`
    background-image: url( ${Backgraundlogin} );
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width:50%;

    display: flex;
    align-items: center;
    justify-content: center;


    img{
        width: 80%;

    }


`;
export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width:50%;
    background-image: url( ${Backgraund} );
    background-color: #1e1e1e;
 
    p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;
    font-weight: 700;
  
        a {
            text-decoration: underline;
            cursor: pointer;
            color: #fff;
            &:hover{
                font-weight: 700;
                color: #9758a9;
            };
        };
    }   
`;

export const Title = styled.h2`

font-family: "Road Rage", serif;
font-size: 40px;
color: #9758a9;

`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    min-width: 400px;
    width: 100%;


`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    

    input{
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
        
    }
    label{
        font-size: 18px;
        font-weight: 600;
        color: #ffff;


    }
    p
        {
        
        color: #cf3057;
        font-size: 14px;
        line-height: 80%;
        font-weight:600;
      height:10px;
      }
    
`
export const Ipuntes= styled.div`
width:100%;
margin-bottom:30px;




`
export const Link = styled(ReactLink)`

             text-decoration: underline;
            cursor: pointer;
            color: #fff;
            &:hover{
                font-weight: 700;
                color: #9758a9;
            }
`

