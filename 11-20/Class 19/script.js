/*
Operadores de comparação
> Maior que
>= Maior ou igual a 
< Menor que
<= Menor ou igual a
== Igualdade (valor)
=== Igualdade estrita (valor e tipo) mais usados
!= Diferente (valor)
!== Diferente estrito (valor e tipo) mais usados
*/  

const comparation = 10 > 5 // retorna true
console.log(comparation) 

const num1 = 12
const num2 = '12'
const comp = (num1 == num2) // se usarmos os 2= n conseguimos identificar a tipo 
console.log(comp)



/*
Operadores Lógicos

&& -> AND -> E
|| -> OR  -> OU
!  -> NOT -> NÃO
*/

const expressaoAnd1 = true && true && true && true // true

const expressaoAnd2 = true && true && true && false // se 1 for false, toda a comparação é falsa

const expressaoOr1 = false || false || false || true // true

const expressaoOr2 = false || false || false || false  // se todos forem falsos, o resultado é falso

console.log(expressaoAnd1, expressaoAnd2, expressaoOr1, expressaoOr2)

console.log(!!true) // uma ! (negação), muda o valor e duas volta ao valor inicial

