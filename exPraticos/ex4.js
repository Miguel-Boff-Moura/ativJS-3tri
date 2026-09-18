let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let p1 = parseFloat(prompt("Digite o peso da primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let p2 = parseFloat(prompt("Digite o peso da segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let p3 = parseFloat(prompt("Digite o peso da terceira nota: "));

let mediaPonderada = (nota1 * p1 + nota2 * p2 + nota3 * p3) / (p1 + p2 + p3);

//console.log("A média ponderada é: " + mediaPonderada.toFixed(2));

if (mediaPonderada >= 7) {
    console.log("Aprovado com média: " + mediaPonderada.toFixed(2));
}else if (mediaPonderada >= 5 && mediaPonderada < 7) {
    console.log("Em recuperação com média: " + mediaPonderada.toFixed(2));
    let notaRecuperacao = parseFloat(prompt(`Em recuperação com média: ${mediaPonderada.toFixed(2)}, diga a nota do exame de recuperação: `));
    mediaPonderada = (mediaPonderada + notaRecuperacao) / 2;
    console.log("Média após a recuperação: " + mediaPonderada.toFixed(2));
}else {
    console.log("Reprovado com média: " + mediaPonderada.toFixed(2));
}

console.log("Depois de fazer a recuperação a nova nota do aluno é: " + mediaPonderada.toFixed(2));
