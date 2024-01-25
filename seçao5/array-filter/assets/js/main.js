const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Letícia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallace', idade: 47}
];

const pessoasNome = pessoas.filter(obj => obj.nome.length >= 5);

const pessoasIdade = pessoas.filter(obj => obj.idade > 50);

const pessoasTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));