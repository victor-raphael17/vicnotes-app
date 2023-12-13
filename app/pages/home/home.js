function adicionarBotao() {
    const novoBotao = document.createElement('button');
    novoBotao.classList.add('btn', 'btn-secondary', 'mb-3');
    novoBotao.textContent = 'Botão';
    novoBotao.addEventListener('click', abrirModal);

    const botoesContainer = document.getElementById('botoesContainer');

    // Crie uma nova linha (div com a classe 'row') se necessário
    if (botoesContainer.children.length === 0 || botoesContainer.lastChild.children.length >= 2) {
        const novaLinha = document.createElement('div');

        novaLinha.classList.add('d-flex', 'flex-row', 'justify-content-between'); // Adiciona flexbox

        botoesContainer.appendChild(novaLinha);
    }

    // Adicione o botão à última linha
    botoesContainer.lastChild.appendChild(novoBotao);

    novoBotao.style.width = '11.75rem';

    novoBotao.style.height = '11.75rem';
}

  // Função para abrir o modal ao clicar no botão
  function abrirModal() {
    const modal = new bootstrap.Modal(document.getElementById('modalBotao'));

    modal.show();
  }

  // Adiciona um ouvinte de evento ao botão de adicionar
  document.getElementById('btnAdicionar').addEventListener('click', adicionarBotao);

  // Adiciona um ouvinte de evento ao botão de salvar dentro do modal
  document.getElementById('btnSalvar').addEventListener('click', function () {
    // Obtenha os valores do título e conteúdo do modal
    const titulo = document.getElementById('tituloBotao').value;
    const conteudo = document.getElementById('conteudoBotao').value;

    // Atualize o texto do botão atual
    const botoes = document.getElementById('botoesContainer').getElementsByTagName('button');
    const botaoAtual = botoes[botoes.length - 1];
    botaoAtual.textContent = titulo;

    // Feche o modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalBotao'));
    modal.hide();
});