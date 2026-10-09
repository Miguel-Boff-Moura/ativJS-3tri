const form = document.getElementById('cadastroForm');

form.addEventListener('submit', function (evento) {
  // Impede o recarregamento da página (submissão padrão)
  evento.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  const confirma = document.getElementById('confirmaSenha').value;
  const perfil = document.getElementById('perfil').value;
  const termos = document.getElementById('termos').checked;

  // Limpa mensagens anteriores
  document.querySelectorAll('.erro').forEach(function (el) {
    el.innerText = '';
  });
  document.getElementById('mensagemSucesso').innerText = '';

  let valido = true;

  if (nome === '') {
    document.getElementById('erroNome').innerText = 'Informe seu nome completo.';
    valido = false;
  }

  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('erroEmail').innerText = 'Informe seu e-mail.';
    valido = false;
  } else if (!formatoEmail.test(email)) {
    document.getElementById('erroEmail').innerText = 'E-mail em formato inválido.';
    valido = false;
  }

  if (senha.length < 6) {
    document.getElementById('erroSenha').innerText = 'A senha deve ter no mínimo 6 caracteres.';
    valido = false;
  }

  if (confirma === '') {
    document.getElementById('erroConfirma').innerText = 'Confirme sua senha.';
    valido = false;
  } else if (senha !== confirma) {
    document.getElementById('erroConfirma').innerText = 'As senhas não conferem.';
    valido = false;
  }

  if (perfil === '') {
    document.getElementById('erroPerfil').innerText = 'Selecione um perfil técnico.';
    valido = false;
  }

  if (!termos) {
    document.getElementById('erroTermos').innerText = 'Você precisa aceitar os Termos de Uso.';
    valido = false;
  }

  if (!valido) {
    return;
  }

  // Atualização dinâmica do DOM com os dados validados
  document.getElementById('saidaNome').innerText = nome;
  document.getElementById('saidaEmail').innerText = email;
  document.getElementById('saidaPerfil').innerText = perfil;
  document.getElementById('mensagemSucesso').innerText = 'Cadastro realizado com sucesso!';

  form.reset();
});
