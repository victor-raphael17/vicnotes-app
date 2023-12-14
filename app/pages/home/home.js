function adicionarBotao() {
  const novoBotao = document.createElement('button');
  novoBotao.classList.add('btn', 'btn-secondary', 'mb-3', 'note-icon-size');
  novoBotao.textContent = 'Título';
  novoBotao.addEventListener('click', abrirModal);

  const containerButtons = document.getElementById('containerButtons');

  if (containerButtons.children.length === 0 || containerButtons.lastChild.children.length >= 2) {
      const novaLinha = document.createElement('div');

      novaLinha.classList.add('d-flex', 'flex-row', 'justify-content-between');

      containerButtons.appendChild(novaLinha);
  }

  containerButtons.lastChild.appendChild(novoBotao);
}

  // Função para abrir o modal ao clicar no botão
function abrirModal() {
  const modal = new bootstrap.Modal(document.getElementById('modalButton'));

  modal.show();
  }

function removeButton(button) {
  const buttonsContainer = document.getElementById('containerButtons');
  
  // Find the parent of the button (the div containing the buttons)
  const row = button.parentNode;

  // Remove the button
  row.removeChild(button);

  // If the row is empty, remove the row as well
  if (row.children.length === 0) {
      buttonsContainer.removeChild(row);
  }
}


  // Adiciona um ouvinte de evento ao botão de adicionar
document.getElementById('btnAdicionar').addEventListener('click', adicionarBotao);

  // Adiciona um ouvinte de evento ao botão de salvar dentro do modal
document.getElementById('btnSalvar').addEventListener('click', function () {
    // Obtenha os valores do título e conteúdo do modal
  const titulo = document.getElementById('tituloBotao').value,
    conteudo = document.getElementById('conteudoBotao').value;

    // Atualize o texto do botão atual
  const botoes = document.getElementById('containerButtons').getElementsByTagName('button'),
    botaoAtual = botoes[botoes.length - 1];

  botaoAtual.textContent = titulo;

    // Feche o modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalButton'));
    modal.hide();
});

document.getElementById('btnRemover').addEventListener('click', function () {
    const containerButtons = document.getElementById('containerButtons'),
      botoes = containerButtons.getElementsByTagName('button');

    // Remove the last button if there is any
    if (botoes.length > 0) {
        const lastBotao = botoes[botoes.length - 1];
        removeButton(lastBotao);
    }

    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalButton'));
    modal.hide();
});

