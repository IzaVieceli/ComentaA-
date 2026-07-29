let genero = "";

function escolherGenero(valor){

    genero = valor;

    localStorage.setItem("genero",valor);

    document.getElementById("btn").disabled = false;

}

function proximo(){

    window.location.href="peso.html";

}