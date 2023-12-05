const nome = 'Guilherme';
const sobrenome = 'Araujo';
const idade = 21;
const peso = 54;
const altura = 1.69;
let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu imc é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);