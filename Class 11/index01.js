let num1 = 0.7
let num2 = 0.1

num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1.0

num1 = parseFloat(num1.toFixed(2)) /* Sem o parseFloat ou Number quando fizermos o isInteger e o valor for 1.00 vai dar falso */


/* Caso não queira usar essa forma de cima podemos usar calculos para tirar os pontos flutuantes

num1 = ((num1 * 100) + (num2 * 100)) / 100  => 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100  => 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100  => 1.0

*/

console.log(num1) // Sem a linha de baixo o valor de num1 aqui seria 0,999999999

console.log(Number.isInteger(num1))