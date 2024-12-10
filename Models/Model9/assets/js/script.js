// 705.484.450-52 / 070.987.720-03

/*

7x 0x 5x 4x 8x 4x 4x 5x 0x pegamos os 9 valores e multiplicamos por 10! - 1! ou sejá de 10 a 2
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0
11 - (237 % 11) = 5 (Primeiros dígitos)

se o digito for maior que 9, consideramos 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x os 9 mais o primeiro digito de 11! - 1!
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10

11 - (284 % 11) = 5 (Segundo dígito)

*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); // remove qualquer valor que não seja um número
let cpfArray = Array.from(cpfLimpo); // transformar em Array

console.log(cpfArray); 

console.log(cpfArray.reduce((ac, val) => ac +  Number(val), 0)); 






