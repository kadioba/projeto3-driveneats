function selecionarPrato(pratoSelecionado, chkSelecionado){

    const pratoDesmarcar = document.querySelector(".pratos .borda-selecionado");

    if (pratoDesmarcar !== null){
        pratoDesmarcar.classList.remove("borda-selecionado");
    }

    pratoSelecionado.classList.add("borda-selecionado");
}

function selecionarBebida(bebidaSelecionada){

    const bebidaDesmarcar = document.querySelector(".bebidas .borda-selecionado");

    if (bebidaDesmarcar !== null){
        bebidaDesmarcar.classList.remove("borda-selecionado");
    }

    bebidaSelecionada.classList.add("borda-selecionado");

}

function selecionarSobremesa(sobremesaSelecionada){

    const sobremesaDesmarcar = document.querySelector(".sobremesas .borda-selecionado");

    if (sobremesaDesmarcar !== null){
        sobremesaDesmarcar.classList.remove("borda-selecionado");
    }

    sobremesaSelecionada.classList.add("borda-selecionado");

}