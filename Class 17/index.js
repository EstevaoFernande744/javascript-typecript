/*
Primitivos (Valores imutáveis) - String, number, boolean, undefined, null (bigint, symbol) - Valor
*/

let nome = 'Estevão'
nome = 'Jordanna' // não estamos mudando 
nome[0] = 'R' // como a String é imutável não conseguimos mudar esse elemento.
console.log(nome[0], nome)

let a = 'A'
let b = a // copiando o valor de a para b, mas elas não são idenpendentes
console.log(a, b)
a = 'Outro valor'
console.log(a, b)

/* 
Referência (mutável) - Arrays, Object, Function - Passado por referência
*/

let c = [1, 2, 3]
let d = c
let e = [...c] // O valor de "c" foi copiado em "e" sendo que quando mudamos "c" e "d" não alteramos e
console.log(c, d)
c.push(4)
console.log(c, d, e)
d.pop(4)
console.log(c, d)


const a1 = {
    nome: 'Estevão',
    sobrenome: 'Fernandes'
}

const a2 = {
    nome: 'Jordanna',
    sobrenome: 'Lima'
}

const a3 = {...a1}

a1.nome = 'Junior'
console.log(a2)