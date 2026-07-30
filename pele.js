let personagem = JSON.parse(localStorage.getItem("personagem"));

if (!personagem) {
    personagem = {};
}

function selecionarPele(cor) {

    personagem.pele = cor;

    localStorage.setItem("personagem", JSON.stringify(personagem));

    document.getElementById("continuar").disabled = false;

}

function continuar() {

    window.location.href = "cabelo.html";

}