const caixa = document.getElementById("caixa");
const botao = document.getElementById("btn");
let clicks = 0;

botao.addEventListener("click", function () {

    clicks++;
    if (clicks % 2) {
        caixa.style.backgroundColor = "yellow";
        botao.innerText = "Desligado";
    } else {
        caixa.style.backgroundColor = "blue";
        botao.innerText = "ligado";
    }

});




console.log("Click Botão");