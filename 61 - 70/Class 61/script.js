// Define Propriety (Singular) / Define Proprieties (Plural)

function Produto(nome, preço, estoque, marca) {
    this.nome = nome;  // informação publica
    this.preço = preço; // informação publica
    this.estoque = estoque; // informação privada
    this.marca = marca; // informação publica
    Object.defineProperty(this, 'estoque', {
         enumerable: false, // vai mostrar a chave
        // value estoque, // valor
        // writable: false  // não pode mudar o valor do estoque
        // configurable: true, // pode apagar a chave? ou reconfigurar? 
    });

    Object.defineProperty(this, 'estoque', { 
        enumerable: true, // mostrar a chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: false // configurar
    })

    Object.defineProperties(this, {
        
        nome: {
            enumerable: true, 
            value: estoque, 
            writable: false, 
            configurable: false
        },

        preço: {
            enumerable: true, 
            value: estoque, 
            writable: false, 
            configurable: false
        },

        marca: {
            enumerable: true, 
            value: estoque, 
            writable: false, 
            configurable: false
        },
    })
}

const produto1 = new Produto('Camiseta', 45, 100, 'Ditongo');
const produto2 = new Produto('Calça', 100, 50, 'Sarwel');
const produto3 = new Produto('Moletom', 120, 80, 'Manikas');
const produto4 = new Produto('Boné', 30, 100, 'Nike');
const produto5 = new Produto('Tenis', 290, 40, 'Addidas');
produto2.estoque = 5000 // se o configurable for true esse valor vai alterar o estoque
delete produto2.estoque; 

console.log(produto2)
console.log(Object.keys(produto2));

for(let chave in produto2) {
    console.log(chave);
}