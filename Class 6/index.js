const nome = 'Estevão Fernandes' // String
const nome1 = "Estevão Fernandes" // String
const nome2 = `Estevão Fernandes` // String
const num1 = 10 // number
const num2 = 10.5 // number
let nomeAluno // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null // nulo -> não aponta para local nenhum na memória
const aprovado = true // boolean = true or false (lógico)

console.log(nome, typeof nome)
console.log(nome1, typeof nome1)
console.log(nome2, typeof nome2)
console.log(num1, typeof num1)
console.log(num2, typeof num2)
console.log(nomeAluno, typeof nomeAluno)
console.log(sobrenomeAluno, typeof sobrenomeAluno)
console.log(aprovado, typeof aprovado)


const a = [1, 2]
const b = a
console.log(a, b)