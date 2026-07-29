function salvarPeso(){

    let opcao = document.querySelector('input[name="peso"]:checked');

    if(opcao == null){

        alert("Escolha um biotipo.");

        return;

    }

    localStorage.setItem("peso",opcao.value);

    window.location.href="pele.html";

}