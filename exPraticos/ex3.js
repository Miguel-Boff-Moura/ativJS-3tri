var n = prompt("Digite um número: ");
var num = parseFloat(n);
Number.isInteger(num) ? console.log("O número é inteiro.") : console.log("O número não é inteiro.");

if (num > 0) {
    console.log("O número é positivo.");
}else if (num < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let par = (num % 2 === 0) ? true : false;
if (par) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

if (Number.isInteger(num) && num > 1) {
    let primo = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }

    console.log(primo ? "O número é primo." : "O número não é primo.");
} else {
    console.log("O número não é primo.");
}
