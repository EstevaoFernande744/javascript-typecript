/*
&& -> todas expressões tem que ser verdadeiras para ser verdadeiro 
|| -> todas expressões tem que ser falsas para ser falso


FALSY - 0 , '' (string vazia), null, undefined e NaN 
false - falso literal

*/

console.log('Estevão Fernandes' && 0 && 'Jordanna Lima')
// ele checa os 2 valor e se tiver tudo certo ele fala o ultimo elemento
// caso tenhamos um dos valores FALSY ele aponto esse valor 

console.log(0 || false || null || 'Estevão Fernandes' || true)

const corUsuario = null // caso aqui tenha outra cor, ira apresentar essa cor
const corPadrao = 'preto'

console.log(corUsuario || corPadrao)


const a = 0
const b = null
const c = 'false'
const d = false
const e = NaN

console.log(a || b || c || d || e)
