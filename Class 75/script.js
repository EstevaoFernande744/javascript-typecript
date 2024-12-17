function espera(msg, tempo) { // , cb
    return new Promise((resolve, reject) => { // promises
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
        resolve(msg);   
    }, tempo)
    })  
}


espera('Conexão com a BD.', aleatorio(1, 4))
    .then(resposta => {
        console.log(resposta);
        return espera('Buscando dados da BASE.', aleatorio(1, 4));
    }) // sera executado apos o resolve
    .then(resposta => { // colocando outra 
       console.log(resposta);
       return espera('Tratando os dados da BASE.', aleatorio(1, 4));
    })
    .then(resposta => {
        console.log(resposta);
        return espera(2, aleatorio(1, 4));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela.');
    })
    .catch(e =>{ // usando catch para capturar o erro
        console.log('Error:', e);
    }) 

    console.log('Esse promesis esta sendo exibido em paralelo, não segue uma sequencia.')


/*

function espera(msg, tempo){
setTimeout(() => {
    console.log(msg);   
    //    if(cb) cb();
}, tempo)}

*/ 
   


function aleatorio(min, max){
    max *= 1000
    min *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}



espera('frase 1', aleatorio(1, 4));
espera('frase 2', aleatorio(1, 4));
espera('frase 3', aleatorio(1, 4));


/* -------------- Arvore de Natal ------------------------------

 espera('frase 1', aleatorio(1, 4), function() {
    espera('frase 2', aleatorio(1, 4), function() {
        espera('frase 3', aleatorio(1, 4));
    })
})

 */