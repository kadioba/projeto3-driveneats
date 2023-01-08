// Variaveis globais
var prato;
var precoPrato;
var precoPratoExibir;
var bebida;
var precoBebida;
var precoBebidaExibir;
var sobremesa;
var precoSobremesa;
var precoSobremesaExibir;
var precoTotal = 0;
var precoTotalExibir

function selecionarPrato(pratoSelecionado, nomePratoSelecionado, precoPratoSelecionado){

    const pratoDesmarcar = document.querySelector(".pratos .borda-selecionado");

    if (pratoDesmarcar !== null){
        if(pratoDesmarcar !== pratoSelecionado){
            pratoDesmarcar.classList.remove("borda-selecionado");
        }
        precoTotal = precoTotal - precoPrato;
    }

    pratoSelecionado.classList.add("borda-selecionado");

    prato = nomePratoSelecionado;
    precoPrato = Number(precoPratoSelecionado);
    precoPratoExibir =  precoPratoSelecionado.toFixed(2).replaceAll('.',',');

    precoTotal += precoPrato;
    console.log(precoTotal);

    habilitarBotaoDePedido();
}

function selecionarBebida(bebidaSelecionada, nomeBebidaSelecionada, precoBebidaSelecionada){

    const bebidaDesmarcar = document.querySelector(".bebidas .borda-selecionado");

    if (bebidaDesmarcar !== null){
        if(bebidaDesmarcar !== bebidaSelecionada){
            bebidaDesmarcar.classList.remove("borda-selecionado");
        }
        precoTotal = precoTotal - precoBebida;
    }

    bebidaSelecionada.classList.add("borda-selecionado");

    bebida = nomeBebidaSelecionada;
    precoBebida = Number(precoBebidaSelecionada);
    precoBebidaExibir = precoBebidaSelecionada.toFixed(2).replaceAll('.',',');

    precoTotal += precoBebida;
    console.log(precoTotal);

    habilitarBotaoDePedido();

}

function selecionarSobremesa(sobremesaSelecionada, nomeSobremesaSelecionada, precoSobremesaSelecionada){

    const sobremesaDesmarcar = document.querySelector(".sobremesas .borda-selecionado");

    if (sobremesaDesmarcar !== null){
        if(sobremesaDesmarcar !== sobremesaSelecionada){
            sobremesaDesmarcar.classList.remove("borda-selecionado");
        }

        precoTotal = precoTotal - precoSobremesa;
    }

    sobremesaSelecionada.classList.add("borda-selecionado");

    sobremesa = nomeSobremesaSelecionada;
    precoSobremesa = Number(precoSobremesaSelecionada);
    precoSobremesaExibir = precoSobremesaSelecionada.toFixed(2).replaceAll('.',',');

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

    precoTotalExibir = precoTotal.toFixed(2).replaceAll('.',',');

    document.querySelector(".tela-verificacao").classList.remove("escondido");

    const pratoConfirmado = document.querySelector(".prato-confirmado");
    pratoConfirmado.innerHTML = prato;
    
    const precoPratoConfirmado = document.querySelector(".preco-prato-confirmado");
    precoPratoConfirmado.innerHTML = "R$ " + precoPratoExibir;

    const bebidaConfirmada = document.querySelector(".bebida-confirmada");
    bebidaConfirmada.innerHTML = bebida;
    
    const precoBebidaConfirmada = document.querySelector(".preco-bebida-confirmada");
    precoBebidaConfirmada.innerHTML = "R$ " + precoBebidaExibir;

    const sobremesaConfirmada = document.querySelector(".sobremesa-confirmada");
    sobremesaConfirmada.innerHTML = sobremesa;
    
    const precoSobremesaConfirmada = document.querySelector(".preco-sobremesa-confirmada");
    precoSobremesaConfirmada.innerHTML = "R$ " + precoSobremesaExibir;

    const precoTotalConfirmado = document.querySelector(".preco-total");
    precoTotalConfirmado.innerHTML = "R$ " + precoTotalExibir;
}