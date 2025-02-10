import { Conteiner, Banner, Categorymenu, Conteinnerproducts, Categorybutton } from "./styles";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { FormatPrice} from "../../utils/formartmoeda";
import  {CardProduct} from "../../components/cardProduct";

export function Menu() {
   const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadCategory() {
      try {
        const response = await api.get("/categories");

        console.log("📌 Resposta da API (Categorias):", response.data);

        // Verifica se a resposta é um array ou um objeto contendo as categorias
        const fetchedCategories = Array.isArray(response.data)
          ? response.data
          : response.data.categories || [];

        setCategories(fetchedCategories);
      } catch (error) {
        console.error("❌ Erro ao carregar categorias:", error);
      }
    }

    async function loadProduct() {
      try {
        const response = await api.get("/products");
        console.log("📌 Resposta da API (Produtos):", response.data);

        // Verifica se a resposta é um array ou um objeto contendo os produtos
        const fetchedProducts = Array.isArray(response.data)
          ? response.data
          : response.data.products || [];

        // Formata os produtos com o preço correto
        const formattedProducts = fetchedProducts.map((product) => ({
          ...product,
          currencyValue: product.price ? FormatPrice(product.price) : "R$ 0,00",
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("❌ Erro ao carregar produtos:", error);
      }
    }

    loadCategory();
    loadProduct();
  }, []);
  return (
    <Conteiner>
      <Banner>
        <h1>O MELHOR
            <br />
            HAMBURGUER
            <br />
            ESTA AQUI
           
            <span>esse cardápio está irresistível</span>
        </h1>
      </Banner>

      <Categorymenu>
        
        {categories.length > 0 ? (
          categories.map((category) => (
            <Categorybutton key={category.id}>{category.name}</Categorybutton>
          ))
        ) : (
          <p>Carregando categorias...</p>
        )}
      
      </Categorymenu>

      <Conteinnerproducts>
        
        {products.length > 0 ? (
          products.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      
      </Conteinnerproducts>
      
        
    </Conteiner>



    
  )
}