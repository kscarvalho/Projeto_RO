function startTest() {
  window.location.href = 'questionario.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formQuiz');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let score = 0;
      const data = new FormData(form);

      for (let value of data.values()) {
        score += Number(value);
      }

      localStorage.setItem('score', score);
      window.location.href = 'resultado.html';
    });
  }

  // Exibir resultado
  if (window.location.pathname.includes('resultado.html')) {
    const score = Number(localStorage.getItem('score'));
    const scoreText = document.getElementById('score');
    const rec = document.getElementById('recommendations');

    let level = '';
    let recommendations = '';
    if (score <= 5) {
      level = 'Baixo risco emocional';
      recommendations = `
        <p><strong>Gestor:</strong> Manter comunicação aberta, reforçar reconhecimento e prevenir sobrecarga.</p>
        <p><strong>Empresa (NR-1):</strong> Monitorar riscos psicossociais no PGR e manter ações de prevenção contínuas.</p>`;
    } else if (score <= 9) {
      level = 'Risco moderado';
      recommendations = `
        <p><strong>Gestor:</strong> Realizar feedbacks individuais, ajustar demandas e acompanhar clima da equipe.</p>
        <p><strong>Empresa (NR-1):</strong> Implementar medidas administrativas e treinamento sobre saúde mental e estresse.</p>`;
    } else {
      level = 'Alto risco de estresse e esgotamento';
      recommendations = `
        <p><strong>Gestor:</strong> Reduzir imediatamente cargas excessivas, oferecer apoio emocional e acolhimento.</p>
        <p><strong>Empresa (NR-1):</strong> Inserir riscos psicossociais no PGR com ações corretivas urgentes: pausas, melhoria de jornada, apoio psicológico e revisão de processos.</p>
      `;
    }

    const p = document.getElementById('score');
    p.style.fontSize = '1.3rem';

    if (score <= 5) {
      p.style.color = 'green';
    } else if (score <= 9) {
      p.style.color = 'orange';
    } else {
      p.style.color = 'red';
    }

    scoreText.innerHTML = `<p>Sua pontuação:</p> 
    <p><strong>${score}</strong></p>
    <p>${level}</p>
    `;
    rec.innerHTML = recommendations;
  }
});

const avaliacao = document.getElementById('sectionAvaliacao');
const tituloAvaliacao = document.getElementById('avaliacao');

function exibirAvaliacao() {
  avaliacao.classList.add('active');
}

tituloAvaliacao.addEventListener('click', exibirAvaliacao);
