function valorBotao() {
    alert(document.querySelector('input[type=button]').value);
}

const listaTeclas = document.querySelectorAll('input[type=button]');

function valorBotaoUm() {
    alert(listaTeclas[0].value);
}

listaTeclas[0].onclick = valorBotaoUm;