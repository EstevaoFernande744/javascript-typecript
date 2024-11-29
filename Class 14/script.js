const numeros = [1, 2, 3, 4]
const nomes = ['João', 'Maria', 'Estevão']
const geral = ['Estevão', 1, null, 12]

console.log(geral [0], numeros[1], nomes[2])
nomes [3] = 'Pedro'
let alunosRemovidos = nomes.pop() // Remove o ultimo item e salva em uma variavel
console.log(alunosRemovidos)
console.log(nomes)
nomes.unshift('Kuki') // Vai ser o segundo item 
nomes.unshift('Suzumi') // Serve para adicionar outro item ao vetor mas no inicio
nomes [nomes.length] = 'Juca' // Serve para adicionar outro item ao vetor no final
nomes.push('Tião') // Serve também para adicionar mais um item no vetor no final
console.log(nomes)
console.log(nomes.length, numeros.length, geral.length)
let removido = nomes.shift() // Remove o primeiro item e salva em uma variavel
console.log(removido)
console.log(nomes)
delete nomes [3] // deleta o elemento do indice 1 mas deixa o espaço
console.log(nomes.slice(2, 5))

console.log(typeof nomes)
console.log(nomes instanceof Array)// pergunta se é um array