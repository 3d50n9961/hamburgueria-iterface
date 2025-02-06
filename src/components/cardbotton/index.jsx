import card from '../../assets/carrinho.png'
import {Conteinerbotton,Div} from './styles'



export function Cardbotton({...props}){

return(
    <Div>
    <Conteinerbotton {...props}>
        <img src= {card} alt='carrinho-de-comptas' />
    </Conteinerbotton>
    </Div>
)


}