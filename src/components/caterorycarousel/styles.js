import styled from "styled-components"


export const Conteiner = styled.div`
    align-items:center;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    gap:20px;
    padding:20px;
    width: 100vw;
    margin: 0 auto;
    overflow-x: hidden;
    
    
    .carrocel-item{  
        padding: 20px;        
        width: 100vw;       
        display: flex; 
        box-sizing: border-box;
        margin: 0 0;
        flex: 0 0 auto;
        
       


    };
    
`

export const Thitle = styled.h2`
margin-top:5px;
color: #9758a6;
font-weight:800;
font-size: 32px;
position: relative;
text-align:center;

    &::after {
        content:'';
        position : relative;
        bottom: 0;
        width:56px; 
        height:4px;
        background-color: #9758a6;
        left:calc(50%-25%);
    


}
`
export const ConteinerItens = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'imageUrl', // Não passa imageUrl para o DOM
})`
    background:url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    min-width:300px;
    max-height:200px;
    box-shadow: rgba(0,0,0,0.35) 0px 5px 15px; 
    display: flex;
    align-items: center;
    padding:20px 10px;
    height: 200px;
    
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    z-index: 1;
    p{
      margin-top:50%;
      color: #f4f4f4;
      font-weight:400;
      font-size:30px;
  }
`
export const RightArrowButton = styled.button`
background:transparent;
border: none;
position: absolute;
margin-left:90%;
                   top: 50%; 
                   transform: translateY(-50%);
                   z-index: 100; 
                   padding: 10px;
                   cursor: pointer;
                   color: black; // Cor do ícone
                   opacity: .5;
                   font-Size: 30px; // Tamanho do ícone
                   width:100px;


 &:hover {
   opacity: 1;
 }

 svg {
   font-size: 24px;
 }
`;
export const LeftArrowButton = styled.button`
  background:transparent;
 border: none;
 position: absolute;
 margin-left:3%;
                    top: 50%; 
                    transform: translateY(-50%);
                    z-index: 100; 
                    padding: 10px;
                    cursor: pointer;
                    color:  black; // Cor do ícone
                    opacity: .5;
                    font-Size: 30px; // Tamanho do ícone
                    width:100px;
                     
                    
                     

  &:hover {
    opacity: 1;
  }

  svg {
    font-size: 24px;
  }
`;