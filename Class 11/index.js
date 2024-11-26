// IEEE 754-2008 Padrão dos números seguidos pelo JavaScript

let num1 = 1 // Number
let num2 = 2.5 // Number
let num3 = 1500
let num4 = 10.5789551255547

console.log(num1.toString() + num2)
num1 = num1.toString() // Para mudar o valor de num1 para String
console.log(typeof num1)    

console.log(num3.toString(2)) // Para ver o num3 em binario

console.log(num3.toFixed(2)) // Aredondar e deixar apenas duas casas decimais

console.log(Number.isInteger(num1)) // Para saber se o número é um inteiro ou não, se não for, retorna false

let temp = num1 * 'Olá'

console.log(Number.isNaN(temp))