let idCounter = 0;
const respostaAPI = [];

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
    let idx = -1;
    taskList.innerHTML = '';

    while(respostaAPI.length > 0 && ++idx < respostaAPI.length) {
        taskList.innerHTML += `<li>
        <input type="checkbox" />
        <span class="text">${respostaAPI[idx].descricao}</span>

        `
    }
}