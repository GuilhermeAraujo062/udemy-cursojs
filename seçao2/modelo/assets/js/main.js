function meuEscopo() {
   const form = document.querySelector('.form');
   const resultado = document.querySelector('.resultado');
   
   function recebeCalculo(calculo){
      calculo.preventDefault();

      const peso = form.querySelector('#peso');
      const altura = form.querySelector('#altura');

      const imc = peso / (altura * altura);

      resultado.innerHTML += `<p>Seu imc é ${imc}</p>`
   }

   form.addEventListener('submit', recebeCalculo);
  
}
meuEscopo();