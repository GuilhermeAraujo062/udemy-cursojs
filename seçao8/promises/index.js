function rand (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error ('Error'));

        setTimeout(() => {
           resolve(msg); 
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados na BASE', rand ('1, 3'));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('conectando', rand (1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('ERRO:', e);
    });