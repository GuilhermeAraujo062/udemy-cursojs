const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const h1 = document.querySelector('h1');

h1.style.textAlign = 'center';

for (let p of ps) {
    p.style.color = 'white';
    p.style.backgroundColor = 'rgb(9, 48, 56)';
    p.style.borderRadius = '5px';
    p.style.textAlign = 'center';
};