let seed = "";

function gerarAvatar(){

    let estilo = document.getElementById("estilo").value;

    document.getElementById("avatar").src =
    `https://api.dicebear.com/9.x/${estilo}/svg?seed=${seed}`;

}

function novoAvatar(){

    seed = Math.random().toString(36).substring(2);

    gerarAvatar();

}

function continuar(){

    localStorage.setItem("avatar",document.getElementById("avatar").src);

    window.location.href="feed.html";

}

novoAvatar();