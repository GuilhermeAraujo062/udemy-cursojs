let numero = Number(prompt('Digite um número'));
let raiz = numero ** 0.5;
let inteiro = Number.isInteger(numero);
let nan = Number.isNaN(numero);
let paraBaixo = Math.floor(numero);
let paraCima = Math.ceil(numero);
let decimal = numero.toFixed(2);

document.getElementById('num').innerText = numero;
document.getElementById('raiz').innerText = raiz;
document.getElementById('numIn').innerText = numero;
document.getElementById('checkTF').innerText = inteiro;
document.getElementById('checkNan').innerText = nan;
document.getElementById('baixo').innerText = paraBaixo;
document.getElementById('cima').innerText = paraCima;
document.getElementById('decimal').innerText = decimal;