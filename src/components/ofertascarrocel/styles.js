import styled from "styled-components"


export const Conteiner = styled.div`
    align-items:center;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    
    
    gap: 10px;
    width: 100vw;
    margin: 0 auto;
    overflow-x: hidden;
    
    
    .carrocel-item{  
        padding: 10px;
        width: 100vw;
        display: flex; 
        box-sizing: border-box;
        margin: 20px 0;
        flex: 0 0 auto;
        
       


    };
    
`

export const Thitle = styled.h2`
text-align: center;
margin-bottom: 5px;
margin:10px 0;
color:rgb(19, 141, 19);
font-weight:800;
font-size: 32px;
margin-bottom:12px;
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
 