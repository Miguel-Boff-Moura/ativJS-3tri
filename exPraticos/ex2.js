var r1 = prompt("Digite o primeiro número: ");
var r2 = prompt("Digite o segundo número: ");

var n1 = parseFloat(r1);
var n2 = parseFloat(r2);

var soma = n1 + n2;
var diferença = n1 - n2;
var produto = n1 * n2;
var divisão = n1 / n2;
var resto = n1 % n2;

console.log("Soma: " + soma);
console.log("Diferença: " + diferença);
console.log("Produto: " + produto);

if (n2 === 0) {
    console.log("Divisão: Não é possível dividir por zero.");
    console.log("Resto: Não é possível calcular o resto da divisão por zero.");
} else {
    console.log("Divisão: " + divisão);
    console.log("Resto: " + resto);
}
