function selecionarPrato(pratoSelecionado){

    const pratoDesmarcar = document.querySelector(".pratos .selecionado");

    if (pratoDesmarcar !== null){
        pratoDesmarcar.classList.remove("selecionado");
    }

    pratoSelecionado.classList.add("selecionado");

}

function selecionarBebida(bebidaSelecionada){

    const bebidaDesmarcar = document.querySelector(".bebidas .selecionado");

    if (bebidaDesmarcar !== null){
        bebidaDesmarcar.classList.remove("selecionado");
    }

    bebidaSelecionada.classList.add("selecionado");

}

function selecionarSobremesa(sobremesaSelecionada){

    const sobremesaDesmarcar = document.querySelector(".sobremesas .selecionado");

    if (sobremesaDesmarcar !== null){
        sobremesaDesmarcar.classList.remove("selecionado");
    }

    sobremesaSelecionada.classList.add("selecionado");

}