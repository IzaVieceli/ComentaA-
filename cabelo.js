let personagem = JSON.parse(localStorage.getItem("personagem"));

if (!personagem) {
    personagem = {};
}

function selecionarCabelo(cor){

    personagem.cabelo = cor;

    localStorage.setItem("personagem", JSON.stringify(personagem));

    document.getElementById("continuar").disabled = false;

}

function continuar(){

    window.location.href = "olhos.html";

}