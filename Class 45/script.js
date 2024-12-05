function rand(min = 1000, max = 3000){
    const num = Math.random() * (max-min) + min;
    return Math.floor(num);
}

console.log(rand())

function f1(callback){
    setTimeout(function(){ console.log('f1'); if(callback) callback()}, rand()); 
}

function f2(callback){
    setTimeout(function(){ 
        console.log('f2');
        if(callback) callback();
    }, rand()); 
}

function f3(callback){
    setTimeout(function(){ 
        console.log('f3');
        if(callback) callback();
    }, rand()); 
}

/*
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá Mundo!');
        })
    })
});

*/

f1(f1Callback); // crio a f1 callback

function f1Callback(){ // com ela chamo a f2
    f2(f2Callback);
}

function f2Callback(){ // crio a f2 e chamo a f3
    f3(f3Callback);
}

function f3Callback(){ // crio a f3 e chamo 'Olá mundo!
    console.log('Olá mundo!')
}

// f2();
// f3();
console.log('Olá mundo!')


/*
Math.random() retorna um valor decimal aleatório entre 0,1

Math.floor() ser para arredondar um número para baixo

valor de (0 - 1) * [(max - min)tamanho] + min (pra dar a distancia que o comprimento esta do zero)
*/