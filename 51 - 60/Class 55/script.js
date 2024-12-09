// Map Array do mesmo tamanho mas com os valores alterados
// Map tem as mesmas opções do filter 


// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobrarNumeros = numeros.map(valor => valor * 2) // valor, indice, array

console.log(dobrarNumeros)


// Retorne apenas um string com o nome da pessoa
// Retorne apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Estevão', idade: 26},
    {nome: 'Jordanna', idade: 23},
    {nome: 'Lua', idade: 3},
    {nome: 'Lunna', idade: 10},
    {nome: 'Kelle', idade: 19},
    {nome: 'Isabella', idade: 30},
];

const nomes = pessoas.map(obj => obj.nome); // valor ou obj, mas obj tem maior sentido
console.log(nomes)

const removeNomes = pessoas.map(obj => ({ idade: obj.idade })/* isso se torna uma expressão */); 
    /* delete obj.nome remover a chave nome do objeto
       return obj
    */

console.log(removeNomes)

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj} // se não adicionarmos essa copia, o obj vai ser mudado
    newObj.id = indice; // Para tirar o indice 0 podemos + 1;
    return newObj;
})

console.log(comIds)
