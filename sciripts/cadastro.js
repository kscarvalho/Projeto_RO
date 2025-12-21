const usuarioCadastrado = document.querySelector('.alert');

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
  usuarioCadastrado.innerHTML = 'Usuário cadastrado com sucesso!';
  // alert('Usuário cadastrado com sucesso!');

  function cleanInput() {
    //CRIADO PARA LIMPAR O INPUT
    cadUser.value = '';
    cadPass.value = '';
  }
  cleanInput();
}

const button = document.querySelector('button');

function hoverButton() {
  button.classList.add('active');
}

button.addEventListener('click', hoverButton);
