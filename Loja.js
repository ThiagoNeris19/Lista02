// Array de objetos representando produtos
const produtos = [
  { nome: "Camisa Polo", preco: 79.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 3500.0, categoria: "Eletrônicos" },
  { nome: "Tênis Esportivo", preco: 199.9, categoria: "Calçados" },
  { nome: "Smartphone", preco: 2500.0, categoria: "Eletrônicos" },
  { nome: "Calça Jeans", preco: 120.0, categoria: "Roupas" },
];

// Função para filtrar produtos por categoria
function filtrarPorCategoria(lista, categoriaDesejada) {
  return lista.filter((produto) => produto.category === categoriaDesejada);
}

// Exemplo de uso
const eletronicos = filtrarPorCategoria(produtos, "Eletrônicos");
console.log(eletronicos);
