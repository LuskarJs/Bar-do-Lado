import cerveja from "../Assests/cerveja.png";
import latinhaRefrigerante from "../Assests/coca.png";
import batataFrita from "../Assests/batata-frita.png";
import hamburguer from "../Assests/hamburguer.png";
import petiscos from "../Assests/espeto-churrasco.png";

export const produtos = [
  {
    nome: "Cerveja",
    categoria: "Bebidas",
    subcategoria: "Álcool",
    image: cerveja,
    preco: 5.99,
    estoque: 100,
  },
  {
    nome: "Refrigerante",
    categoria: "Bebidas",
    subcategoria: "Não Alcoólico",
    image: "",
    preco: 2.99,
    estoque: 150,
  },
  {
    nome: "H2O",
    categoria: "Bebidas",
    subcategoria: "Não Alcoólico",
    image: "",
    preco: 1.99,
    estoque: 200,
  },
  {
    nome: "Latinha de Refrigerante",
    categoria: "Bebidas",
    subcategoria: "Não Alcoólico",
    image: latinhaRefrigerante,
    preco: 1.49,
    estoque: 50,
  },
  {
    nome: "Batata Frita",
    categoria: "Lanches",
    subcategoria: "Acompanhamento",
    image: batataFrita,
    preco: 3.49,
    estoque: 80,
  },
  {
    nome: "Hamburgueres",
    categoria: "Lanches",
    subcategoria: "Prato Principal",
    image: hamburguer,
    preco: 4.99,
    estoque: 70,
  },
  {
    nome: "Petiscos",
    categoria: "Lanches",
    subcategoria: "Aperitivo",
    image: petiscos,
    preco: 6.99,
    estoque: 40,
  },
  {
    nome: "Churrasco",
    categoria: "Lanches",
    subcategoria: "Prato Principal",
    image: '',
    preco: 8.99,
    estoque: 30,
  },
];
