let tentativas = 3;
const loginCorreto = "admin";
const senhaCorreta = "1234";

while (tentativas > 0) {
    let login = prompt("Digite seu login:");
    let senha = prompt("Digite sua senha:");

    if (login === loginCorreto && senha === senhaCorreta) {
        alert("Acesso liberado");
        break;
    } else {
        tentativas--;

        if (tentativas > 0) {
            alert("Login ou senha incorretos. Tentativas restantes: " + tentativas);
        } else {
            alert("Conta bloqueada");
        }
    }
}
