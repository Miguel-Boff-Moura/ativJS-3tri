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

for (let i = 1; i <= 100; i++) {
  if (ehPrimo(i) && i % 7 === 0) {
    console.log(i);
    break;
  }
}
