console.log("cabelo.js carregado");

let personagem = JSON.parse(localStorage.getItem("personagem")) || {};

function selecionarCabelo(cor) {
    console.log("Clique:", cor);

    personagem.cabelo = cor;

    localStorage.setItem("personagem", JSON.stringify(personagem));

    document.getElementById("continuar").disabled = false;
}

function continuar() {
    alert("Funcionou!");
}