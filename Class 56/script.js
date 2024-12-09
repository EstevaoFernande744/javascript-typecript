// Reduce

// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const somaNumeros = numeros.reduce(function(acum, valor){ // acumulador, valor, indice, array
    acum += valor
    // console.log(acum, valor);
    return acum;
}, 0) // valor inicial para o acumulador

console.log(somaNumeros);

const numerosPares = numeros.reduce(function(acum, valor){
    if (valor % 2 === 0) acum.push(valor);
    return acum;
}, []) // tem que usar o valor inicial

console.log(numerosPares)

const numerosImpares = numeros.reduce(function(acum, valor){
    if (valor % 2 !== 0) acum.push(valor);
    return acum;
}, []) // tem que usar o valor inicial

console.log(numerosImpares)

const dobroNumeros = numeros.reduce(function(acum, valor){
    acum.push(valor * 2);
    return acum;
}, []) 

console.log(dobroNumeros)



// Retorne a pessoa mais velha 

const pessoas = [
    {nome: 'Estevão', idade: 26},
    {nome: 'Jordanna', idade: 23},
    {nome: 'Lua', idade: 3},
    {nome: 'Lunna', idade: 10},
    {nome: 'Kelle', idade: 19},
    {nome: 'Isabella', idade: 30},
];

const maisVelha = pessoas.reduce(function(acum, valor){
    if(acum.idade > valor.idade) return acum;
    return valor;
})

console.log(maisVelha)