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
}

const produto1 = new Produto('Camiseta', 45, 100, 'Ditongo');
const produto2 = new Produto('Calça', 100, 50, 'Sarwel');
const produto3 = new Produto('Moletom', 120, 80, 'Manikas');
const produto4 = new Produto('Boné', 30, 100, 'Nike');
const produto5 = new Produto('Tenis', 290, 40, 'Addidas');

console.log(produto2)