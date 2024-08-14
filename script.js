let idCounter = 0;

function registrarValor() {
    var valor = document.getElementsByClassName("BMO")[0].value;
    var list = document.getElementsByClassName("tai")[0];

    // Cria um novo item de lista
    var listItem = document.createElement("li");
    listItem.id = `item-${idCounter}`;
    listItem.innerHTML = `
        ${valor}
        <button onclick="deletarValor('item-${idCounter}')" class="diva">-</button>
    `;

    // Adiciona o novo item à lista
    list.appendChild(listItem);

    // Incrementa o contador de IDs
    idCounter++;
}

function deletarValor(id) {
    var item = document.getElementById(id);
    item.remove();
}
