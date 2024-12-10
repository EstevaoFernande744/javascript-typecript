/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Copo', preço: 20};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
}) 
const caneca = {
    ...produto, // spread do objeto produto
    material: 'vidro',
};


/*
const caneca = Object.assign({}, produto, {material: 'vidro'}) // mesma coisa mas menos intuitivo
*/

/*
const caneca = { nome: produto.nome, preço: produto.preço, material: 'vidro'} // pior forma possivel
*/

caneca.nome = 'Xicara';
caneca.preço = 28;
console.log(produto) // produto inicial
console.log('--------------------------------------------------------------')
console.log(caneca) // produto oriundo do original sem alterar o mesmo
console.log('--------------------------------------------------------------')

console.log(Object.keys(caneca)) // vemos as chaves do objeto
Object.freeze(produto); // não podemos alterar o objeto
console.log('--------------------------------------------------------------')
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // pegamos o objeto produto e vamos ver quais são as configurações da chave nome
console.log('--------------------------------------------------------------')
console.log(Object.values(caneca)) // temos só os valores 
console.log('--------------------------------------------------------------')
console.log(Object.entries(caneca)) 

// podemos então fazer também 

console.log('--------------------------------------------------------------')

for(let entry of Object.entries(caneca)){ // organizamos os itens dois a dois como são vetores
    console.log(entry)
}

console.log('--------------------------------------------------------------')


// fazendo o destrocturin 

for(let [chave, valor] of Object.entries(caneca)){
    console.log(chave, valor);
}