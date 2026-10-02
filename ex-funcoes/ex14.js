function calculadora (num1, num2, operacao) {
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            return num1 / num2;
        default:
            return "Operação inválida";
    }
}

calculadora(10, 5, 'soma');
