// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares = numeros.filter((valor) => valor % 2 === 0).map((obj) => obj * 2
).reduce((acum, valor) => acum + valor
)


/*
numeros.filter(function(valor) {
    return (valor % 2 === 0)
}).map(function(obj) { 
    return (obj * 2)
}).reduce(function(acum, valor) { 
    return (acum + valor)
})
 */



console.log(numerosPares)

// [ 50,   80, 2,  8, 22 ]  pares
// [ 100, 160, 4, 16, 44 ]  dobro

/*
const dobroNumeros = numeros.map(function(obj){
    return (obj * 2) 
})

console.log(dobroNumeros)

*/ 

/*
const somarTudo = numeros.reduce(function(acum, valor){
    acum += valor
    return acum
}, 0)

console.log(somarTudo)

*/