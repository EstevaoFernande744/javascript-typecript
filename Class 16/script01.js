let array = [1, 2, 3]  // pode ser const mas
array.push(4)
array[0] = 'Luiz'
// array = 'Outra coisa'    se fosse const eu não poderia utilizar essa linha
console.log(array)


/*
const nome01 = 'Estevão'
const sobrenome01 = 'Fernandes'
const idade01 = 26

const nome02 = 'Jordanna'
const sobrenome02 = 'Lima'
const idade02 = 23

const nome03 = 'Luiza'
const sobrenome03 = 'Cristina'
const idade03 = 24

let pessoa01 = [nome01, sobrenome01, idade01]

let pessoa02 = [nome02, sobrenome02, idade02]

let pessoa03 = [nome03, sobrenome03, idade03]



const pessoa1 = {
    nome: 'Estevão',
    sobrenome: 'Fernandes',
    idade: 26
}

const pessoa2 = {
    nome: 'Jordanna',
    sobrenome: 'Lima',
    idade: 23
}

const pessoa3 = {
    nome: 'Luiza',
    sobrenome: 'Cristina',
    idade: 24
}

console.log(pessoa1.nome)
console.log(pessoa01)
*/


function criaPessoa(nome, sobrenome, idade){ // Parametro
    return { //nome, sobrenome, idade
        nome, // :nome   o js entende que é pra criar um nome com o valor de nome 
        sobrenome, // :sobrenome ,  entende como se tivesse sobrenome com o valor de sobrenome
        idade // :idade com o valor da idade
    }
}

const pessoa1 = criaPessoa('Estevão', 'Fernandes', 26) // Argumento
const pessoa2 = criaPessoa('Jordanna', 'Lima', 23)
const pessoa3 = criaPessoa('Luiza', 'Cristina', 24)
console.log(pessoa1.nome)