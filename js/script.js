let prato = document.querySelector(".prato");
let bebida = document.querySelector(".bebida");
let sobremesa = document.querySelector(".sobremesa");

let pratoNome = null;
let pratoPreco = null;
let bebidaNome = null;
let bebidaPreco = null;
let sobremesaNome = null;
let sobremesaPreco = null;

function selecionarPrato(opcaoSelecionada) {
    let desselecionar = prato.querySelector(".selecionado");
    if (desselecionar !== null){
        desselecionar.classList.remove("selecionado");
    }

    let botao = prato.querySelector("." + opcaoSelecionada);
    botao.classList.add("selecionado");

    let nome = botao.querySelector(".titulo");
    pratoNome = nome.innerHTML;

    let preco = botao.querySelector(".preco");
    pratoPreco = preco.innerHTML;
    pratoPreco = pratoPreco.replace('R$ ', '');
    pratoPreco = pratoPreco.replace(',', '.');
    pratoPreco = Number(pratoPreco);

    verificar()
}

function selecionarBebida(opcaoSelecionada) {
    let desselecionar = bebida.querySelector(".selecionado");
    if (desselecionar !== null){
        desselecionar.classList.remove("selecionado");
    }

    let botao = bebida.querySelector("." + opcaoSelecionada);
    botao.classList.add("selecionado");

    let nome = botao.querySelector(".titulo");
    bebidaNome = nome.innerHTML;

    let preco = botao.querySelector(".preco");
    bebidaPreco = preco.innerHTML;
    bebidaPreco = bebidaPreco.replace('R$ ', '');
    bebidaPreco = bebidaPreco.replace(',', '.');
    bebidaPreco = Number(bebidaPreco);

    verificar()
}

function selecionarSobremesa(opcaoSelecionada) {
    let desselecionar = sobremesa.querySelector(".selecionado");
    if (desselecionar !== null){
        desselecionar.classList.remove("selecionado");
    }

    let botao = sobremesa.querySelector("." + opcaoSelecionada);
    botao.classList.add("selecionado");

    let nome = botao.querySelector(".titulo");
    sobremesaNome = nome.innerHTML;

    let preco = botao.querySelector(".preco");
    sobremesaPreco = preco.innerHTML;
    sobremesaPreco = sobremesaPreco.replace('R$ ', '');
    sobremesaPreco = sobremesaPreco.replace(',', '.');
    sobremesaPreco = Number(sobremesaPreco);

    verificar()
}

function verificar(){
    if(pratoPreco !== null && bebidaPreco !== null && sobremesaPreco !== null){
        let pronto = document.querySelector("footer");
        pronto.innerHTML = '<div class="botao-disponivel" onclick="fecharPedido()"><p>Fechar pedido</p></div>';
    }
}

function fecharPedido() {
    let fechar = document.querySelector(".telaFinalizar");
    fechar.innerHTML = '<div class="fundoConfirmarPedido"><div class="confirmarPedido"><p class="confirmeSeuPedido">Confirme seu pedido</p><div class="confirmarPreco"><p>' + pratoNome + '</p><p>' + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pratoPreco) + '</p></div><div class="confirmarPreco"><p>' + bebidaNome + '</p><p>' + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(bebidaPreco) + '</p></div><div class="confirmarPreco"><p>' + sobremesaNome + '</p><p>' + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sobremesaPreco) + '</p></div><div class="confirmarPreco"><p class="total">TOTAL</p><p class="total">' + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pratoPreco + bebidaPreco + sobremesaPreco) + '</p></div><div class="botaoTudoCerto"><p>Tudo certo, pode pedir</p></div><div class="botaoCancelar"><p>Cancelar</p></div></div></div>';
}