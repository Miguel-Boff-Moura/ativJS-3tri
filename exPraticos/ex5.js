let precoProd = parseFloat(prompt("Digite o preço do produto: "));
let vip = confirm("O cliente é VIP?");
let parcelas = parseInt(prompt("Digite o número de parcelas: "));
let cupom = prompt("Digite o código do cupom de desconto (se houver): ");

let desc = 0;

if (vip) {
    precoProd *= 0.8;
} else if (vip === false && precoProd > 150) {
    precoProd *= 0.9;
} else if (cupom === "PROMO10") {
    precoProd *= 0.9;
} else if (parcelas > 3) {
    precoProd *= 1.02;
}

console.log(`Preço final do produto: R$${precoProd.toFixed(2)} + R$${(precoProd * 0.12).toFixed(2)} = R$${(precoProd * 1.12).toFixed(2)}`);
console.log(`Preço de cada parcela: R$${(precoProd / parcelas).toFixed(2)}`);
console.log(`Preço final do produto: R$${precoProd.toFixed(2)}`);
