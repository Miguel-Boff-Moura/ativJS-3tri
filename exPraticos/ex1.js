var vCompra = prompt("Digite o valor da compra: ");
var vip = prompt("Você é cliente VIP? (s/n)");
var cupom = prompt("Digite o cupom, se tiver: ");
var parcela = prompt("Digite o número de parcelas: ");

var desconto = 0;
var pFinal = 0;

if (vip == "s") {
 desconto = desconto + 20;
}

if (cupom == "PROMO10") {
    desconto = desconto + 10;
}

if (parcela > 3) {
    desconto = desconto - 2;
}

pFinal = vCompra - (vCompra * desconto / 100);

console.log("O valor final da compra é: " + pFinal.toFixed(2));
