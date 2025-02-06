import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';


const globalStyles = createGlobalStyle`
* {

margin: 0;
padding: 0;
box-sizing: border-box;
outline: none;
font-family: "Poppins", serif;
font-weight: 400;
font-style: normal;
width: 60%;
}
button{
cursor: pointer;
}
.react-multi-carousel-list {
        display: flex;
        align-items: center;
        overflow: visible;
        position: relative;
        width: 100vw; /* Garante que o carrossel ocupe toda a largura */
        max-height:450px;
    }

`;
export default globalStyles;