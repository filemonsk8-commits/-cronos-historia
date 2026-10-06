const fontesDeDados = [
  { tipo: 'brasil', url: 'docs/.github/data/brasil/pre-cabralino/pre-cabralino.json' },
  { tipo: 'brasil', url: 'docs/.github/data/brasil/colonia/colonia.json' },
  { tipo: 'brasil', url: 'docs/.github/data/brasil/imperio/imperio.json' },
  { tipo: 'brasil', url: 'docs/.github/data/brasil/republica/republica.json' },
  { tipo: 'geral', url: 'docs/.github/data/geral/pre-historia/pre-historia.json' },
  { tipo: 'geral', url: 'docs/.github/data/geral/antiguidade/antiguidade.json' },
  { tipo: 'geral', url: 'docs/.github/data/geral/idade-media/idade-media.json' },
  { tipo: 'geral', url: 'docs/.github/data/geral/moderna-contemporanea/moderna-contemporanea.json' }
];

let todosEventos = [];

async function carregarDados() {
  const loadingEl = document.getElementById('loading');
  
  try {
    const requisicoes = fontesDeDados.map(async (item) => {
      const resposta = await fetch(item.url);
      if (!resposta.ok) throw new Error(`Erro ao carregar ${item.url}`);
      const dados = await resposta.json();
      return dados.map(evento => ({ ...evento, categoria: item.tipo }));
    });

    const resultados = await Promise.all(requisicoes);
    todosEventos = resultados.flat();

    loadingEl.style.display = 'none';
    renderizarCards(todosEventos);
  } catch (erro) {
    console.error('Erro na carga dos ficheiros:', erro);
    loadingEl.innerText = 'Erro ao carregar os ficheiros JSON. Verifica o caminho e o console.';
  }
}

function renderizarCards(eventos) {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = '';

  eventos.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div>
        <span class="bloco-tag">${item.bloco} • ${item.categoria.toUpperCase()}</span>
        <h2>${item.titulo_bloco}</h2>
        <div class="periodo">🗓️ ${item.periodo}</div>
        <p>${item.resumo_card}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filtrar(categoria) {
  const botoes = document.querySelectorAll('.btn-filtro');
  botoes.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  if (categoria === 'todos') {
    renderizarCards(todosEventos);
  } else {
    const filtrados = todosEventos.filter(item => item.categoria === categoria);
    renderizarCards(filtrados);
  }
}

carregarDados();
