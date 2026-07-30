function selecionarCabelo(cor){

    personagem.cabelo = cor;

    localStorage.setItem("personagem", JSON.stringify(personagem));

    document.querySelectorAll(".cabelo").forEach(botao=>{
        botao.classList.remove("selecionado");
    });

    event.target.classList.add("selecionado");

    document.getElementById("continuar").disabled=false;

}