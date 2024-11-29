let numero = Number(prompt('Digite um número'))
let h1 = document.getElementById('numTitulo')
let Texto = document.getElementById('Texto')

//h1.innerHTML = ''  Para limpar o h1
//Texto.innerHTML = '' Para limpar o texto
h1.innerHTML = `Seu número é: <strong>${numero}</strong>`
Texto.innerHTML += `<p>A raiz quadrada é: <strong>${numero ** 0.5}</strong></p> `
Texto.innerHTML += `<p>${numero} é inteiro? <strong>${Number.isInteger(numero)}</strong></p>`
Texto.innerHTML += `<p>${numero} é NaN? <strong>${Number.isNaN(numero)}</strong></p>`
Texto.innerHTML += `<p>Arredondando pra baixo: <strong>${Math.floor(numero)}</strong></p>`
Texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`
Texto.innerHTML += `<p>Seu número com 2 casa decimais é: <strong>${numero.toFixed(2)}</strong></p>`