// Parte 1
const categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];
console.log('1.1', categorias);

const codigosProdutos = [101, 102, 103, 104];
const fornecedores = new Array('TechSupply', 'ModaExpress', 'SuperFoods');
console.log('1.2', codigosProdutos, fornecedores);

console.log('1.3', categorias[0]);
categorias[1] = 'Calçados';
console.log('1.3', categorias);

// Parte 2
categorias.push('Livros');
categorias.pop();
categorias.unshift('Brinquedos');
categorias.shift();
console.log('2.1', categorias);

console.log('2.2', categorias.length);

console.log('2.3', categorias.indexOf('Calçados'));
console.log('2.3', categorias.includes('Eletrônicos'));

// Parte 3
for (let i = 0; i < categorias.length; i++) {
  console.log('3.1', categorias[i]);
}

for (const categoria of categorias) {
  console.log('3.2', categoria);
}

// Parte 4
const produtos = [
  { nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
  { nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
  { nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

console.log('4.1', produtos[0].nome);

const produtosBaratos = produtos.filter(function (p) {
  return p.preco < 300.00;
});
console.log('4.2', produtosBaratos);

const precos = [50, 150, 200, 350, 400];
const multiplos = precos.filter(function (preco) {
  return preco % 100 === 0;
});
console.log('4.2', multiplos);

const quantidades = [2, 3, 5, 10];
const totalItens = quantidades.reduce(function (acc, q) {
  return acc + q;
}, 0);
console.log('4.3', totalItens);

const valorTotal = produtos.reduce(function (acc, p) {
  return acc + p.preco * p.estoque;
}, 0);
console.log('4.3', valorTotal);

const precosOriginais = [100, 200, 300];
const comDesconto = precosOriginais.map(function (preco) {
  return preco * 0.9;
});
console.log('4.4', comDesconto);

const nomesProdutos = produtos.map(function (p) {
  return p.nome;
});
console.log('4.4', nomesProdutos);

const copia = produtos.slice();
copia.sort(function (a, b) {
  return a.preco - b.preco;
});
console.log('4.5', copia);

const temEstoqueBaixo = produtos.some(function (p) {
  return p.estoque < 5;
});
console.log('4.6', temEstoqueBaixo);

const inventario = [
  { nome: 'Teclado', estoque: 15 },
  { nome: 'Mouse', estoque: 2 },
  { nome: 'Headset', estoque: 10 }
];

const temCritico = inventario.some(function (item) {
  return item.estoque < 5;
});
console.log('4.6', temCritico);

const critico = inventario.find(function (item) {
  return item.estoque < 5;
});
console.log('4.6', critico);