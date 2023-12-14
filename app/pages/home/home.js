function addButton() {
  const newButton = document.createElement('button');
  newButton.classList.add('btn', 'btn-secondary', 'mb-3', 'note-icon-size');
  newButton.textContent = 'Note title';
  newButton.addEventListener('click', openModal);

  const containerButtons = document.getElementById('containerButtons');

  if (containerButtons.children.length === 0 || containerButtons.lastChild.children.length >= 2) {
    const newLine = document.createElement('div');

    newLine.classList.add('d-flex', 'flex-row', 'justify-content-between');

    containerButtons.appendChild(newLine);
  }

  containerButtons.lastChild.appendChild(newButton);

  $(newButton).hide().appendTo(containerButtons.lastChild).fadeIn('400');
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
document.getElementById('btnAdd').addEventListener('click', addButton);

document.getElementById('saveBtn').addEventListener('click', function () {

  const title = document.getElementById('buttonTitle').value;

  const buttons = document.getElementById('containerButtons').getElementsByTagName('button'),
    currentButton = buttons[buttons.length - 1];

  currentButton.textContent = title;

    const modal = bootstrap.Modal.getInstance(document.getElementById('modalButton'));
    modal.hide();
});

document.getElementById('btnRemove').addEventListener('click', function () {
    const containerButtons = document.getElementById('containerButtons'),
      buttons = containerButtons.getElementsByTagName('button');

    if (buttons.length > 0) {
        const lastButton = buttons[buttons.length - 1];
        removeButton(lastButton);
    }

    const modal = bootstrap.Modal.getInstance(document.getElementById('modalButton'));
    modal.hide();
});

$(document).ready(function() {
  
  $("#cep-input").mask("00000000");

  $("#submitButton").on("click", function(event) {
      event.preventDefault();

      var cep = $("#cep-input").val();

      var url = "https://viacep.com.br/ws/" + cep + "/json/";

      $.ajax({
          url: url,
          type: "GET",
          dataType: "json",
          success: function(data) {
              $("#cep-viacep").text(data.localidade + ", " + data.uf);
          },
          error: function(error) {
              console.log("Erro na solicitação ViaCEP:", error);
          }
      });
  });
});
