let n = prompt("Digite um número de 1 a 7: ");

switch (n) {
    case "1":
        alert("Domingo, final de semana.");
        break;
    case "2":
        alert("Segunda-feira, dia útil.");
        break;
    case "3":
        alert("Terça-feira, dia útil.");
        break;
    case "4":
        alert("Quarta-feira, dia útil.");
        break;
    case "5":
        alert("Quinta-feira, dia útil.");
        break;
    case "6":
        alert("Sexta-feira, dia útil.");
        break;
    case "7":
        alert("Sábado, final de semana.");
        break;
    default:
        alert("Número inválido. Digite um número de 1 a 7.");
}
