// FUNÇÃO SIMPLES DE "CRIPTOGRAFIA" (apenas didática)
function criptografar(texto) {
  return btoa(texto); // base64 (NÃO é segura para produção)
}

// SALVAR USUÁRIO
function salvarUsuario(user, pass) {
  const dados = {
    usuario: criptografar(user),
    senha: criptografar(pass),
  };

  localStorage.setItem('auth', JSON.stringify(dados));
}

// CADASTRO
function cadastrar() {
  const user = document.getElementById('cadUser').value;
  const pass = document.getElementById('cadPass').value;

  if (user === '' || pass === '') {
    alert('Preencha os campos');
    return;
  }

  salvarUsuario(user, pass);
  alert('Usuário cadastrado com sucesso!');
}
