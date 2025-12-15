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

  if (userDigitado === userSalvo && passDigitada === passSalva) {
    window.open('home.html', '_blank');
  } else {
    document.getElementById('msg').innerText = 'Usuário ou senha incorretos!';
    document.getElementById('msg').style.color = 'red';
  }
}
