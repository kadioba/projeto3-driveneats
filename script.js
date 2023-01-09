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
var precoTotalExibir;
var nomeCliente;
var enderecoCliente;
var mensagemPedido;

const bordaSelecionada = "borda-selecionado";
const correcaoCasasDecimais = 2;

function selecionarPrato(pratoSelecionado, nomePratoSelecionado, precoPratoSelecionado){

    const pratoDesmarcar = document.querySelector(".pratos .borda-selecionado");

    if (pratoDesmarcar !== null){
        if(pratoDesmarcar !== pratoSelecionado){
            pratoDesmarcar.classList.remove(bordaSelecionada);
        }
        precoTotal = precoTotal - precoPrato;
    }

    pratoSelecionado.classList.add(bordaSelecionada);

    prato = nomePratoSelecionado;
    precoPrato = Number(precoPratoSelecionado);
    precoPratoExibir =  precoPratoSelecionado.toFixed(correcaoCasasDecimais).replaceAll('.',',');

    precoTotal += precoPrato;
    console.log(precoTotal);

    habilitarBotaoDePedido();
}

function selecionarBebida(bebidaSelecionada, nomeBebidaSelecionada, precoBebidaSelecionada){

    const bebidaDesmarcar = document.querySelector(".bebidas .borda-selecionado");

    if (bebidaDesmarcar !== null){
        if(bebidaDesmarcar !== bebidaSelecionada){
            bebidaDesmarcar.classList.remove(bordaSelecionada);
        }
        precoTotal = precoTotal - precoBebida;
    }

    bebidaSelecionada.classList.add(bordaSelecionada);

    bebida = nomeBebidaSelecionada;
    precoBebida = Number(precoBebidaSelecionada);
    precoBebidaExibir = precoBebidaSelecionada.toFixed(correcaoCasasDecimais).replaceAll('.',',');

    precoTotal += precoBebida;
    console.log(precoTotal);

    habilitarBotaoDePedido();

}

function selecionarSobremesa(sobremesaSelecionada, nomeSobremesaSelecionada, precoSobremesaSelecionada){

    const sobremesaDesmarcar = document.querySelector(".sobremesas .borda-selecionado");

    if (sobremesaDesmarcar !== null){
        if(sobremesaDesmarcar !== sobremesaSelecionada){
            sobremesaDesmarcar.classList.remove(bordaSelecionada);
        }

        precoTotal = precoTotal - precoSobremesa;
    }

    sobremesaSelecionada.classList.add(bordaSelecionada);

    sobremesa = nomeSobremesaSelecionada;
    precoSobremesa = Number(precoSobremesaSelecionada);
    precoSobremesaExibir = precoSobremesaSelecionada.toFixed(correcaoCasasDecimais).replaceAll('.',',');

    precoTotal += precoSobremesa;
    console.log(precoTotal);

    habilitarBotaoDePedido();
}

function  habilitarBotaoDePedido(){
    if (prato !== undefined && sobremesa !== undefined && bebida !== undefined){
        const botaoPedido = document.querySelector(".botao-pedido");
        botaoPedido.removeAttribute("disabled");
        botaoPedido.classList.add("botao-ativo");
        botaoPedido.innerHTML = 'Fechar pedido';
    }
}

function mostrarPedido(){

    nomeCliente = prompt("Digite seu nome:");
    enderecoCliente = prompt("Digite seu endereço:")

    precoTotalExibir = precoTotal.toFixed(correcaoCasasDecimais).replaceAll('.',',');

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

function realizarPedido(){
    mensagemPedido = `
    Olá, gostaira de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${precoTotal.toFixed(correcaoCasasDecimais)}
    
    Nome: ${nomeCliente}
    Endereço: ${enderecoCliente}`;

    const numeroRestaurante = 45999685167;

    window.location.href = `https://wa.me/${numeroRestaurante}?text=${encodeURIComponent(mensagemPedido)}`;
}

function cancelarPedido(){
    document.querySelector(".tela-verificacao").classList.add("escondido");
}