let n = prompt("Digite um número maior que zero: ");
let primos = [];

while (n <= 0) {
    n = prompt("Número inválido! Digite um número maior que zero: ");
    if (ehPrimo(n)){
        primos.push(n);
    }
}

console.log("Números primos digitados até o acerto: " + primos.join(", "));

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
