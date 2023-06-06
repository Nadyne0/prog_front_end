function valorBotaoUm() {
    alert(document.querySelector('input[type=button]').value);
}

const listaTeclas = document.querySelectorAll('input[type=button]');

const display = document.querySelector('input[type=tel]');

function valorBotaoUmJanela() {
    alert(listaTeclas[0].value);
}

function valorBotaoUm() {
    display.value += listaTeclas[0].value;
}

function valorBotao(valor) {
    display.value += (listaTeclas[valor].value);
}

listaTeclas[0].onclick = function() {
    valorBotao(11);
}

function limpaBotao() {
    display.value = '';
}
 
