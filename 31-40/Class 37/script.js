// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e por 5 = retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100


function fizzBuzz (numero){
    if (typeof numero !== 'number') return `O tipo da variavel é ${typeof numero}, e o valor é ${numero})`;
    /* Não podemos usar a vigula return (typeof numero, numero) -Tipo: string, Valor: a

    também podia ser assim  [typeof numero, numero] - ["string", "a"]
    
    ou return { tipo: typeof numero, valor: numero }-{ tipo: "string", valor: "a" }
    */

    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; // tem que ser primeiro
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'));

for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}


