
function registrarValor(){
    var valor = document.getElementsByClassName("BMO")[0].value

    document.getElementsByClassName("tai")[0].innerHTML = `
        <li>${valor}</li>
        <button onclick="deletarValor()>Deletar</button>
    `;

}

function deletarValor() {
    var del = document.getElementsByClassName("")
    del.innerHTML = "";
}