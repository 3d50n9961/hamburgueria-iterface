import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { api } from "../../services/api";
import { Conteiner, Thitle, ConteinerItens,RightArrowButton, LeftArrowButton } from "./styles"; // Supondo que você tem esses estilos definidos

export function CarouselCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategory() {
            try {
                const response = await api.get("/categories");
                console.log("Resposta completa da API:", response);

                // Verifique a estrutura correta dos dados e ajuste aqui
                const fetchedCategories = response.data || [];
                console.log("Dados da API:", fetchedCategories);

                setCategories(fetchedCategories);
            } catch (error) {
                console.error("Erro ao carregar categorias:", error);
            }
        }

        loadCategory();
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
            <Thitle>Categorias</Thitle>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carrocel-item"
                customLeftArrow={<LefArrowButton />}  // Botão esquerdo com ícone
                customRightArrow={<RighArrowButton />}  // Botão direito com ícone 
            >
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <ConteinerItens key={category.id} imageUrl={`data:image/png;base64,${category.image}`}>
                           <p> {category.name} </p>
                        </ConteinerItens>
                    ))
                ) : (
                    <p>Carregando categorias...</p>
                )}
            </Carousel>
        </Conteiner>
    );
}
