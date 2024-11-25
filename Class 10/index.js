//               0123456789
let umaString = "Um \"texto\"" // para fazer com que as aspas apareçam dentro do texto

console.log(umaString[7]) // console.log(umaString.chatAt(7))

// .concat() = +

// para pesquisar usamos (umaString.indexOf('texto')) procuramos o indique que começar a palavra 

// se usarmos (umaString.indexOf('Texto')) não vai identificar pois são diferentes

// se colocarmos (umaString.indexOf('Texto', 3)) dizemos que queremos procurar a palavra texto dps do indice 3

/* Se quisermos fazer a varredura de tras pra frente usamos (umaString.lastIndexOf('texto')) mas vai aparecer o mesmo número */ 

console.log(umaString.replace('Um', 'Outro'))
console.log(umaString.length) // ele da exatamento o tamanho ou seja 10 numero de espaços
console.log(umaString.slice(4, 9)) // se pegarmos ate o 8 não mostra a ultima letra
console.log(umaString.slice(-6, -1)) /* pegamos o tamanho inteiro da String e voltamos 6 casas e depois ignoramos a ultima */
console.log(umaString.substring(umaString.length - 6, umaString.length - 1))

console.log(umaString.split(' '))
console.log(umaString.toUpperCase) // Converte a String em Maiusculo
console.log(umaString.toLowerCase) // Converte a String em Minusculo