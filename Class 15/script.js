/*
function saudaçao(nome) {
   // console.log(`Bom dia ${nome}!`)
    return `Bom dia ${nome}!`
}


saudaçao('Luiz')
saudaçao('Maria')
const variavel = saudaçao('Felipe')
console.log(variavel)

*/

function soma(x, y){
    const resultado = x + y
    return resultado
}

console.log(soma(2, 2))
console.log(soma(3, 1))
console.log(soma(5, 10))

/*
const raiz = function(n) {
    return n ** 0.5
}
*/

const raiz = n => n ** 0.5 // é chamada de arrowfuncion pois consistem em uma seta e equivale a uma função


console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))