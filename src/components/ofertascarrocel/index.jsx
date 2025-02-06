import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FormatPrice} from "../../utils/formartmoeda";

import { api } from "../../services/api";
import { Conteiner, Thitle, RightArrowButton, LeftArrowButton } from "./styles";
import {CardProduct} from '../../components/cardproduct'


export function Carouseloferts() {
  const [oferts, setOferts] = useState([]);

  useEffect(() => {
    async function loadOferts() {
      try {
        const response = await api.get("/products"); // Ajuste a rota conforme necessário
        console.log("Resposta completa da API:", response);

        // Filtrar apenas os produtos em oferta
        const fetchedOferts = response.data
        .filter((product) => product.offer) // Filtra apenas os produtos com "offer: true"
        .map((product) => ({
          ...product, // Inclui todas as propriedades do produto
          currencyValue: FormatPrice(product.price), // Adiciona o preço formatado
        }));
      
      console.log('Fetched Offers:', fetchedOferts);

        setOferts(fetchedOferts);
      } catch (error) {
        console.error("Erro ao carregar ofertas:", error);
      }
    }

    loadOferts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };
  const LefArrowButton = ({ onClick }) => {
          return (
              <LeftArrowButton onClick={onClick}>
                  <FaArrowLeft />
              </LeftArrowButton>
          );
      };
  
      const RighArrowButton = ({ onClick }) => {
          return (
              <RightArrowButton onClick={onClick} >
                  <FaArrowRight />
              </RightArrowButton>
          );
      };
  

  return (
    <Conteiner>
      <Thitle>Oferta do dia</Thitle>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carrocel-item"
        customLeftArrow={<LefArrowButton />}  // Botão esquerdo com ícone
                customRightArrow={<RighArrowButton />}  // Botão direito com ícone 
      >
        {oferts.length > 0 ? (
          oferts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <p>Carregando ofertas...</p>
        )}
      </Carousel>
    </Conteiner>
  );
}
