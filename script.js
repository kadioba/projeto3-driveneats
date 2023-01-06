function selecionarPrato(pratoSelecionado){

    const pratoDesmarcar = document.querySelector(".pratos .selecionado");

    if (pratoDesmarcar !== null){
        pratoDesmarcar.classList.remove("selecionado");
    }

    pratoSelecionado.classList.add("selecionado");

}