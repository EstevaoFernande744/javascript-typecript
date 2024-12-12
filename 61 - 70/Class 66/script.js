// Produto -> aumento, desconto
// Camiseta, caneca, quadros, almofadas

function Produto(nome, preço) {
    this.nome = nome;
    this.preço = preço;
}

Produto.prototype.aumento = function(quantia){
    this.preço += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preço -= quantia;
}


function Camiseta(nome, preço, cor){
    Produto.call(this, nome, preço)
    this.cor = cor; // herda os parametros do pai mas pode ter seus proprios;
}

Camiseta.prototype = Object.create(Produto.prototype); /* objeto criado com o prototype setado do produto / mas o construtor vai mostrar como sendo produto
*/
Camiseta.prototype.constructor = Camiseta// Retorna o construtor como sendo a função Camiset

Camiseta.prototype.aumento = function(percentual){
    this.preço = this.preço + (this.preço * percentual/100); // adicionar percentual
}

Camiseta.prototype.desconto = function(percentual){
    this.preço = this.preço - (this.preço * percentual/100); // adicionar percentual
}

function Caneca(nome, preço, material, estoque){
    Produto.call(this, nome, preço) // herda do pai
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return; // evitar que entre outra coisa a não ser números
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca; 


const produto = new Produto('Gen', 110) // 
const camiseta = new Camiseta('Nike', 183, 'Preta');
const caneca = new Caneca('Afer', 45, 'porcelana', 200)
camiseta.aumento(20)
// caneca.estoque = 100 USANDO O METODO SETTER
console.log(produto)
console.log('--------------------------------------------------------------')
console.log(camiseta)
console.log('--------------------------------------------------------------')
console.log(caneca)
console.log('--------------------------------------------------------------')
console.log(caneca.estoque) // USANDO O METODO GETTER