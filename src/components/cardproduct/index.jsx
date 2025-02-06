import PropTypes from 'prop-types'
import { Conteiner, CardImage } from "./styles";
import {Cardbotton} from '../../components/cardbotton'
export function CardProduct({ product }) {
    return (
      <Conteiner>
        <CardImage 
          key={product.id} 
          src={`data:image/png;base64,${product.image}`} 
          alt={product.name} 
        />
        <div>
          <p>{product.name}</p>
          <strong>{product.currencyValue}</strong>
        </div>
        <Cardbotton></Cardbotton>
      </Conteiner>
    );
  }
  
  CardProduct.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };
