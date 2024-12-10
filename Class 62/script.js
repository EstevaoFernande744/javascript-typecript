// Define Propriety (Singular) / Define Proprieties (Plural)

function Produto(nome, preço, estoque, marca) {
    this.nome = nome;  // informação publica
    this.preço = preço; // informação publica
    // this.estoque = estoque; // informação privada
    this.marca = marca; // informação publica
    let estoquePrivado = estoque; // para trabalhar com setter
    Object.defineProperty(this, 'estoque', {
        enumerable: false, // vai mostrar a chave
        get: function(){
            return estoque; // não vai me mostrar o valor em estoque apenas se eu puxar ele
        },
        set: function(valor) {
            if(typeof valor !== 'number'){  // evitar que valores que não sejam números alterem o valor do estoque.
                console.log('Valor invalido') 
                return;
            }
            estoquePrivado = valor; // faz com que o setter tenha acesso ao valor
        }
        // configurable: true, // pode apagar a chave? ou reconfigurar? 
    });

    Object.defineProperties(this, {
        
        nome: {
            enumerable: true, 
            configurable: false
        },

        preço: {
            enumerable: true, 
            configurable: false
        },

        marca: {
            enumerable: true, 
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

produto2.estoque = 70; // mudando o valor do estoque

// produto2.estoque = 'O valor que eu quero'; - alteração invalida
console.log(produto2.estoque)



// criando uma factory function para criar um objeto

function criaProduto (nome) {
    return {
        get nome(){ // pega o elemento
            return nome;
        },
        set nome(valor){ // intercepta o elemento fazer as mudanças desejadas
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}

const p2 = criaProduto('Camiseta') // vincula a variavel a função com o chave definida
p2.nome = 'Qualquer coisa.' // cramos o elemento dentro da chave nome
console.log(p2.nome); // mostramos o elemento dentro da chave 