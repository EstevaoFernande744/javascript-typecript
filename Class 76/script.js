// metodos promises
// Promises.all  Promises.race  Promises.resolve  Promises.reject

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
        reject('Existe um erro!');
        return 
    }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise.');
        }, tempo);
    });
}

const promises = [
    'Primeiro valor',
    espera('Promises 1', 3000),
    espera('Promises 2', 500),
    espera('Promises', 1000),
   // espera(1000, 1000),
    'Outro valor'
];

const promises1 = [
    espera('Promises 1', 3000),
    espera('Promises 2', 500),
    espera('Promises', 1000),
    // espera(1000, 1000),
];

Promise.all(promises) // se tiver um erro no meio da promises o Promise.all vai retornar apenas o reject
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(error){
        console.log(error);
    })

Promise.race(promises1)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(error){
        console.log(error);
    })

function baixarPagina(){
    const emCache = false; // true pagina em cache

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return espera ('Baixei a página', 3000);
    }
}

baixarPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(erro => console.log('ERRO', erro))


