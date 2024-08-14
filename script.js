let idCounter = 0;

function registrarValor() {
    var valor = document.getElementsByClassName("BMO")[0].value;
    var list = document.getElementsByClassName("tai")[0];

    var listItem = document.createElement("li");
    listItem.id = `item-${idCounter}`;
    listItem.innerHTML = `
        ${valor}
        <button onclick="alterarValor('item-${idCounter}')" class="diva" class="altere">Editar</button>
        <button onclick="deletarValor('item-${idCounter}')" class="diva">-</button>
    `;

    list.appendChild(listItem);

    idCounter++;
}

function deletarValor(id) {
    var item = document.getElementById(id);
    item.remove();
}

function alterarValor() {
    var valores = document.getElementsByClassName("tai");
    valores.innerHTML = `
        <input type="text">
        <Button>Ok</Button>
    `
}


function carregarLista() {
    alert('Carregar lista')
}