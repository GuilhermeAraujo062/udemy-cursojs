function meuEscopo() {
   const peso = document.querySelector('#peso');
   const altura = document.querySelector('#altura');
   const resultado = document.querySelector('.resultado');
   
   resultado.innerHTML += peso + altura;
   
}
meuEscopo();