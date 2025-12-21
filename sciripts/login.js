const userIncorreto = document.querySelector('.alert');

function login() {
  const userDigitado = document.getElementById('loginUser').value;
  const passDigitada = document.getElementById('loginPass').value;

  if (userDigitado === '' || passDigitada === '') {
    alert('Preencha todos os campos');
    return;
  }

  // BUSCAR DADOS SALVOS
  const dadosSalvos = localStorage.getItem('auth');

  if (!dadosSalvos) {
    document.getElementById('msg').innerText = 'Nenhum usuário cadastrado!';
    return;
  }

  const dados = JSON.parse(dadosSalvos);

  // COMPARAÇÃO (descriptografando)
  const userSalvo = atob(dados.usuario);
  const passSalva = atob(dados.senha);

  setTimeout(() => {
    if (userDigitado === userSalvo && passDigitada === passSalva) {
      window.location.href = 'home.html';
    } else {
      userIncorreto.innerHTML = 'Usuário ou senha incorretos!';
    }
  }, 2000);
  function cleanInput() {
    loginUser.value = '';
    loginPass.value = '';
  }
  cleanInput();
}

const button = document.querySelector('button');

function hoverButton() {
  button.classList.add('active');
}

button.addEventListener('click', hoverButton);
