// Filter, map, reduce

// Filter sempre retorna um vetor com a mesma quantidade de elementos ou menos. 

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

/*
function callbackFilter(valor, indice, array){
    return valor > 10;
}
*/

const numerosFiltrados = numeros.filter(valor => valor > 10); // callbackFilter
console.log(numerosFiltrados);


// Map

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a 

const pessoas = [
    {nome: 'Estevão', idade: 26},
    {nome: 'Jordanna', idade: 23},
    {nome: 'Lua', idade: 3},
    {nome: 'Lunna', idade: 10},
    {nome: 'Kelle', idade: 19},
    {nome: 'Isabella', idade: 30},
];


const nome5Letras = pessoas.filter(obj => obj.nome.length >= 5);
/*
const nome5Letras = pessoas.filter(function(obj) {
    return  obj.nome.length >= 5;
});
*/


const nomesMaisDe20 = pessoas.filter(obj => obj.idade > 20)
/* 
const nomesMaisDe50 = pessoas.filter(function(obj)
{return obj.idade > 20});
*/

const pessoasTerminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
/*
const pessoasTerminaA = pessoas.filter(function(obj) { return obj.nome.toLowerCase().endsWith('a')})*/


console.log(nome5Letras)
console.log(nomesMaisDe20)
console.log(pessoasTerminaA)