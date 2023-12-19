function meuEscopo() {
   const form = document.querySelector('.form');
   const resultado = document.querySelector('.resultado');
   
   function recebeCalculo(calculo){
      calculo.preventDefault();
      
      const inputpeso = form.querySelector('#peso');
      const inputaltura = form.querySelector('#altura');

      const peso = Number(inputpeso.value);
      const altura = Number(inputaltura.value);

      const imc = peso / (altura * altura);
      resultado.innerHTML = '';

      function getNivelImc (imc){
         const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

         if (imc >= 39.9) return nivel[5];
         if (imc >= 34.9) return nivel[4];
         if (imc >= 29.9) return nivel[3];
         if (imc >= 24.9) return nivel[2];
         if (imc >= 18.5) return nivel[1];
         if (imc < 18.5) return nivel[0];
         
      }
      
      resultado.innerHTML = `<p>Seu imc é ${imc}</p>`
      resultado.innerHTML += `<p>Seu imc é ${nivel}</p>`
   }

   form.addEventListener('submit', recebeCalculo);  
  
}
meuEscopo();