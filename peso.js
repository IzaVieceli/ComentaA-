function atualizarPeso() {

    let peso = document.getElementById("peso").value;

    if (peso == "") {

        document.getElementById("valorPeso").innerHTML = "";
        document.getElementById("continuar").disabled = true;
        return;

    }

    document.getElementById("valorPeso").innerHTML =
        "Peso selecionado: <strong>" + peso + " kg</strong>";

    document.getElementById("continuar").disabled = false;

}

function salvarPeso() {

    let personagem = JSON.parse(localStorage.getItem("personagem"));

    personagem.peso = document.getElementById("peso").value;

    localStorage.setItem("personagem", JSON.stringify(personagem));

    // Próxima tela
    window.location.href = "pele.html";

}

let largura = 40 + ((peso - 40) / 120) * 60;

document.getElementById("corpo").setAttribute("width", largura);

document.getElementById("corpo").setAttribute("x", 90 - largura / 2);