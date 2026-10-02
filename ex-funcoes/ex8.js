function desconto (valor, desconto) {
    let valorComDesconto = valor - (valor * desconto);
    alert("O valor com desconto é: R$ " + valorComDesconto.toFixed(2));
}

desconto(100, 0.1);