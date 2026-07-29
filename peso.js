function atualizarPeso(){

    let peso = document.getElementById("peso").value;

    if(peso == ""){
        document.getElementById("valorPeso").innerHTML = "";
        document.getElementById("continuar").disabled = true;
        return;
    }

    document.getElementById("valorPeso").innerHTML = peso + " kg";

    document.getElementById("continuar").disabled = false;

}

function salvarPeso(){

    let personagem = JSON.parse(localStorage.getItem("personagem"));

    personagem.peso = document.getElementById("peso").value;

    localStorage.setItem("personagem",JSON.stringify(personagem));

    window.location.href="pele.html";

}