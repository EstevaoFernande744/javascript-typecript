/*
* Aritméticos
* + Adição / Concatenação
* - Subtração
* / Divisão
* * Multiplicação
* ** Potenciação
* % Resto da divisão
*/

const num1 = 5
const num2 = 10
const num3 = 3

console.log(num1 + num2)
console.log(num2 % num3)

//ordem de operação () => ** => *, /, % => +, - 

let contador = 1
contador ++ // contador = contador + 1
console.log(contador)

const passo = 2
let calculadora = 0
calculadora = calculadora + passo
//calculadora += passo  
console.log(calculadora)
calculadora -= passo  
console.log(calculadora)
calculadora *= passo  
console.log(calculadora)
calculadora /= passo  
console.log(calculadora)
calculadora **= passo  
console.log(calculadora)
calculadora %= passo  
console.log(calculadora)



//NaN - Not a number - Erro na conta

const num4 = 10
const num5 = 'Estevão'

console.log(num4 * num5)

