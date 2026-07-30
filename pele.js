function selecionarPele(cor){

    personagem.pele = cor;

    localStorage.setItem("personagem", JSON.stringify(personagem));

    document.querySelectorAll(".pele").forEach(botao=>{
        botao.classList.remove("selecionado");
    });

    event.target.classList.add("selecionado");

    document.getElementById("continuar").disabled=false;

}