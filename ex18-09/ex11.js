let diaS = prompt("Digite o dia da semana (0 a 6):");
let soma = 0;

switch (diaS) {
    case "0":
        console.log("Domingo");
        break;
    case "1":
        console.log("Segunda-feira");
        break;
    case "2":
        console.log("Terça-feira");
        break;
    case "3":
        console.log("Quarta-feira");
        break;
    case "4":
        console.log("Quinta-feira");
        break;
    case "5":
        console.log("Sexta-feira");
        break;
    case "6":
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido!");
}

for (let i = 0; i < diaS; i++) {
    if (i % 2 !== 0) {
        console.log(`Exibindo números ímpares entre 0 e ${diaS}: ${i}`);
        soma += i;
    }
}

if (ehPrimo(soma)) {
    console.log(`A soma (${soma}) é um número primo.`);
} else {
    console.log(`A soma (${soma}) não é um número primo.`);
}

function ehPrimo(numero) {
  if (numero <= 1) return false;
  
  let limite = Math.sqrt(numero);
  for (let i = 2; i <= limite; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  
  return true;
}
