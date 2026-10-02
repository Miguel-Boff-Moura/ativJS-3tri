function calculadoraAvancada (num1, num2, operacao) {
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            return num1 / num2;
        case 'potencia':
            return Math.pow(num1, num2);
        case 'raiz':
            return Math.sqrt(num1);
        default:
            return "Operação inválida";
    }
}

calculadoraAvancada(10, null, 'raiz');
