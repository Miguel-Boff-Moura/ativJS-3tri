let tabu = prompt("Digite um número para ver a tabuada: ");
let soma = 0;

for (let i = 1; i <= 10; i++) {
    let resultado = tabu * i;
    if (resultado % 4 === 0) {
        console.log(`${tabu} x ${i} = ${resultado}`);
        soma = soma + resultado;
    }
}

console.log(`Soma dos resultados múltiplos de 4: ${soma}`);
