function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

/*    -------------------- uma maneira de fazer

function funcaoDoInterval(){
    console.log(mostrarHora())
}

setInterval(funcaoDoInterval, 1000); 

 configura um intervalo de tempo para uma função ser executada 

de 1000 em 1000 milisegundos ou sejá em 1 segundo
*/


// console.log(mostrarHora());


const timer = setInterval(function(){  // usando uma função anonima
    console.log(mostrarHora());
}, 1000);


// utilizamos essa função para parar a outra depois de 5000 milisegundos ou 5 segundos

setTimeout(function(){
    clearInterval(timer);
}, 5000);

setTimeout(function(){
    console.log('Olá mundo!');
}, 5000);