// Variaveis globais
var prato;
var precoPrato;
var bebida;
var precoBebida;
var sobremesa;
var precoSobremesa;

function selecionarPrato(pratoSelecionado, nomePratoSelecionado, precoPratoSelecionado){

    const pratoDesmarcar = document.querySelector(".pratos .borda-selecionado");

    if (pratoDesmarcar !== null){
        pratoDesmarcar.classList.remove("borda-selecionado");
    }

    pratoSelecionado.classList.add("borda-selecionado");

    prato = nomePratoSelecionado;
    precoPrato = precoPratoSelecionado;
    console.log(prato);
    console.log(precoPrato);

    habilitarBotaoDePedido();
}

function selecionarBebida(bebidaSelecionada, nomeBebidaSelecionada, precoBebidaSelecionada){

    const bebidaDesmarcar = document.querySelector(".bebidas .borda-selecionado");

    if (bebidaDesmarcar !== null){
        bebidaDesmarcar.classList.remove("borda-selecionado");
    }

    bebidaSelecionada.classList.add("borda-selecionado");

    bebida = nomeBebidaSelecionada;
    precoBebida = precoBebidaSelecionada;
    console.log(bebida);
    console.log(precoBebida);

    habilitarBotaoDePedido();

}

function selecionarSobremesa(sobremesaSelecionada, nomeSobremesaSelecionada, precoSobremesaSelecionada){

    const sobremesaDesmarcar = document.querySelector(".sobremesas .borda-selecionado");

    if (sobremesaDesmarcar !== null){
        sobremesaDesmarcar.classList.remove("borda-selecionado");
    }

    sobremesaSelecionada.classList.add("borda-selecionado");

    sobremesa = nomeSobremesaSelecionada;
    precoSobremesa = precoSobremesaSelecionada;
    console.log(sobremesa);
    console.log(precoSobremesa);

    habilitarBotaoDePedido();
}

function  habilitarBotaoDePedido(){
    if (prato !== undefined){
        if (sobremesa !== undefined){
            if (bebida !== undefined){
                const botaoPedido = document.querySelector(".botao-pedido");
                botaoPedido.removeAttribute("disabled");
                botaoPedido.classList.add("botao-ativo");
                botaoPedido.innerHTML = 'Fechar pedido';
            }
        }
    }
}

function realizarPedido(){
    alert("teste");
}