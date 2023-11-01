import React, { useState, useEffect } from 'react';
import './allmenu.css';
import { produtos } from './cardapioData';

function CardapioCompleto() {
  const [categorias, setCategorias] = useState([]);
  const [subcategoriasPorCategoria, setSubcategoriasPorCategoria] = useState({});

  // Obtém categorias e organiza subcategorias por categoria
  useEffect(() => {
    const categoriasUnicas = Array.from(new Set(produtos.map(produto => produto.categoria)));
    const subcategoriasPorCategoriaTemp = {};
    
    categoriasUnicas.forEach(categoria => {
      const subcategorias = Array.from(new Set(produtos.filter(produto => produto.categoria === categoria).map(produto => produto.subcategoria)));
      subcategoriasPorCategoriaTemp[categoria] = subcategorias;
    });
    
    setCategorias(categoriasUnicas);
    setSubcategoriasPorCategoria(subcategoriasPorCategoriaTemp);
  }, []);

  return (
    <section className='section-produtos'>
      <div className="sidar-content">
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Cervejas" />
            <button type="submit">Pesquisar</button>
          </form>
        </div>
        <ul className='lista-categorias'>
          {categorias.map((categoria, index) => (
            <li key={index}>
              <h2>{categoria}</h2>
              <ul>
                {subcategoriasPorCategoria[categoria].map((subcategoria, subIndex) => (
                  <li key={subIndex}>{subcategoria}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="Todos-produtos">
        <div className='resultado'>
          <p>Resultados para:<span>Bebidas</span></p>
        </div>
        <ul className="list-produtos">
          {produtos.map((produto, index) => (
            <li className="Card-produtos" key={index}>
              <div className="img-produtos">
                <figure>
                  <img src={produto.image} alt={produto.nome} />
                </figure>
              </div>
              <div className="info-produtos">
                <h3>{produto.nome}</h3>
                <p><span>R$:</span>{produto.preco}</p>
              </div>
              <div className="btns">
                <button>
                  <span>-</span>
                  <p>0</p>
                  <span>+</span>
                </button>
                <button>Comprar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CardapioCompleto;
