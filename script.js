// Variaveis globais
var prato;
var precoPrato;
var bebida;
var precoBebida;
var sobremesa;
var precoSobremesa;
var precoTotal = 0;

function selecionarPrato(pratoSelecionado, nomePratoSelecionado, precoPratoSelecionado){

    const pratoDesmarcar = document.querySelector(".pratos .borda-selecionado");

    if (pratoDesmarcar !== null){
        pratoDesmarcar.classList.remove("borda-selecionado");

        precoTotal = precoTotal - precoPrato;
    }

    pratoSelecionado.classList.add("borda-selecionado");

    prato = nomePratoSelecionado;
    precoPrato = precoPratoSelecionado;

    precoTotal += precoPrato;
    console.log(precoTotal);

    habilitarBotaoDePedido();
}

function selecionarBebida(bebidaSelecionada, nomeBebidaSelecionada, precoBebidaSelecionada){

    const bebidaDesmarcar = document.querySelector(".bebidas .borda-selecionado");

    if (bebidaDesmarcar !== null){
        bebidaDesmarcar.classList.remove("borda-selecionado");

        precoTotal = precoTotal - precoBebida;
    }

    bebidaSelecionada.classList.add("borda-selecionado");

    bebida = nomeBebidaSelecionada;
    precoBebida = precoBebidaSelecionada;

    precoTotal += precoBebida;
    console.log(precoTotal);

    habilitarBotaoDePedido();

}

function selecionarSobremesa(sobremesaSelecionada, nomeSobremesaSelecionada, precoSobremesaSelecionada){

    const sobremesaDesmarcar = document.querySelector(".sobremesas .borda-selecionado");

    if (sobremesaDesmarcar !== null){
        sobremesaDesmarcar.classList.remove("borda-selecionado");

        precoTotal = precoTotal - precoSobremesa;
    }

    sobremesaSelecionada.classList.add("borda-selecionado");

    sobremesa = nomeSobremesaSelecionada;
    precoSobremesa = precoSobremesaSelecionada;

    precoTotal += precoSobremesa;
    console.log(precoTotal);

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

    document.querySelector(".tela-verificacao").classList.remove("escondido");

    const pratoConfirmado = document.querySelector(".prato-confirmado");
    pratoConfirmado.innerHTML = prato;
    
    const precoPratoConfirmado = document.querySelector(".preco-prato-confirmado");
    precoPratoConfirmado.innerHTML = "R$ " + precoPrato;

    const bebidaConfirmada = document.querySelector(".bebida-confirmada");
    bebidaConfirmada.innerHTML = bebida;
    
    const precoBebidaConfirmada = document.querySelector(".preco-bebida-confirmada");
    precoBebidaConfirmada.innerHTML = "R$ " + precoBebida;

    const sobremesaConfirmada = document.querySelector(".sobremesa-confirmada");
    sobremesaConfirmada.innerHTML = sobremesa;
    
    const precoSobremesaConfirmada = document.querySelector(".preco-sobremesa-confirmada");
    precoSobremesaConfirmada.innerHTML = "R$ " + precoSobremesa;

    const precoTotalConfirmado = document.querySelector(".preco-total");
    precoTotalConfirmado.innerHTML = "R$ " + precoTotal;
}