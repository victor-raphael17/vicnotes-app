function adicionarBotao() {
  const novoBotao = document.createElement('button');
  novoBotao.classList.add('btn', 'btn-secondary', 'mb-3', 'note-icon-size');
  novoBotao.textContent = 'Note title';
  novoBotao.addEventListener('click', openModal);

  const containerButtons = document.getElementById('containerButtons');

  if (containerButtons.children.length === 0 || containerButtons.lastChild.children.length >= 2) {
    const newLine = document.createElement('div');

    newLine.classList.add('d-flex', 'flex-row', 'justify-content-between');

    containerButtons.appendChild(newLine);
  }

  containerButtons.lastChild.appendChild(novoBotao);

  $(novoBotao).hide().appendTo(containerButtons.lastChild).fadeIn('400');
}

  // Função para abrir o modal ao clicar no botão
function openModal() {
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
document.getElementById('btnAdd').addEventListener('click', adicionarBotao);

document.getElementById('btnSalvar').addEventListener('click', function () {

  const titulo = document.getElementById('tituloBotao').value;

  const botoes = document.getElementById('containerButtons').getElementsByTagName('button'),
    botaoAtual = botoes[botoes.length - 1];

  botaoAtual.textContent = titulo;

    const modal = bootstrap.Modal.getInstance(document.getElementById('modalButton'));
    modal.hide();
});

document.getElementById('btnRemover').addEventListener('click', function () {
    const containerButtons = document.getElementById('containerButtons'),
      botoes = containerButtons.getElementsByTagName('button');

    if (botoes.length > 0) {
        const lastBotao = botoes[botoes.length - 1];
        removeButton(lastBotao);
    }

    const modal = bootstrap.Modal.getInstance(document.getElementById('modalButton'));
    modal.hide();
});

$(document).ready(function() {
  // Adicione um ouvinte de evento para o botão de envio
  $("#submitButton").on("click", function(event) {
      // Evite que o formulário seja enviado normalmente
      event.preventDefault();

      // Obtenha o valor do CEP do input
      var cep = $("#cep-input").val();

      // Construa a URL da API do ViaCEP com o CEP fornecido
      var url = "https://viacep.com.br/ws/" + cep + "/json/";

      // Faça uma solicitação AJAX para a API do ViaCEP
      $.ajax({
          url: url,
          type: "GET",
          dataType: "json",
          success: function(data) {
              // Atualize o conteúdo do elemento #cep-viacep com o nome da cidade
              $("#cep-viacep").text(data.localidade + ", " + data.uf);
          },
          error: function(error) {
              // Trate os erros, se necessário
              console.log("Erro na solicitação ViaCEP:", error);
          }
      });
  });
});