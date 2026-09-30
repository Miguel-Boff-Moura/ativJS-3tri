let tentativas = 3;
const loginCorreto = "user";
const senhaCorreta = "1234";

const body = document.querySelector("body");
const input = document.querySelector("input").value;
let carrinho = [];

console.log("Bem-vindo ao sistema de login!");

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

function processarOpcao() {
    const opcao = document.getElementById("opcao").value;
    
    switch (opcao) {
        case "1":
            carrinho.push("Produto 1");
            alert("Produto 1 adicionado ao carrinho");
            console.log(carrinho.join(", "));
            break;
        case "2":
            carrinho.push("Produto 2");
            alert("Produto 2 adicionado ao carrinho");
            console.log(carrinho.join(", "));
            break;
        case "3":
            carrinho.push("Produto 3");
            alert("Produto 3 adicionado ao carrinho");
            console.log(carrinho.join(", "));
            break;
        case "4":
            carrinho.push("Produto 4");
            alert("Produto 4 adicionado ao carrinho");
            console.log(carrinho.join(", "));
            break;
        case "0":
            alert("Pedido Finalizado. Produtos no carrinho: " + carrinho.join(", "));
            console.log(carrinho.join(", "));
            carrinho = [];
            break;
        default:
            alert("Opção inválida");
    }
}
