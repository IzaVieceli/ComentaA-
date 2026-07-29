let personagem = {

genero:""

}

function genero(valor){

personagem.genero = valor;

localStorage.setItem("personagem",JSON.stringify(personagem));

document.getElementById("continuar").disabled=false;

if(valor=="homem"){

document.getElementById("avatar").innerHTML="👨";

}

else{

document.getElementById("avatar").innerHTML="👩";

}

}