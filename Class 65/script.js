 // new Object -> object.prototype 
const objetoA = {
    chaveA: 'A',
    // __proto__: Object.prototype (só de criar um objeto)
}

const objetoB = {
    chaveB: 'B',
    // __proto__: objetoA
}

const objetoC = new Object();
objetoC.chaveC = 'C';


Object.setPrototypeOf(objetoC, objetoB) // vai passar pelo B que passa pelo A
Object.setPrototypeOf(objetoB, objetoA) // transforma o objetoA em proptype do objetoB ou sejá do objetoB acessamos a chaveA 

console.log(objetoC.chaveA)

function Produto(nome, preço){
    this.nome = nome;
    this.preço = preço;
}

Produto.prototype.desconto = function(percentual){
    this.preço = this.preço - (this.preço * (percentual/100))
}

Produto.prototype.aumento = function(percentual){
    this.preço = this.preço + (this.preço * (percentual/100))
}

const p1 = new Produto('camiseta', 50);
// p1.desconto(100)
console.log(p1)

console.log('--------------------------------------------------------------')

const p2 = {
    nome: 'Casaco',
    preço: 1000,
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(100)
console.log(p2)

console.log('--------------------------------------------------------------')

const p3 = Object.create(Produto.prototype); // produto vazio
p3.preço = 120; // tem que criar a chave e por o valor
p3.aumento(10)
console.log(p3)

console.log('--------------------------------------------------------------')

const p4 = Object.create(Produto.prototype, {
    preço: {
        writable: true,
        configurable: true,
        enumerable: true, 
        value:115,
    },
    
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true, 
        value:40,
    }
})

p4.aumento(12)
console.log(p4)