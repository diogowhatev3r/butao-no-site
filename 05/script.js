const caixa = document.getElementById("caixa");
const botao = document.getElementById("btn");
let clicks = 0;

botao.addEventListener("click", function() {
caixa.style.backgroundColor = "yellow" ;
botao.innerText = "Desligado" ;
clicks++;
console.log("Click Botão");

});