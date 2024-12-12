function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;  // desperdicio
}

// Adiciona o método `nomeCompleto` no protótipo
Pessoa.prototype.nomeCompleto = function(){ 
    return `${this.nome} ${this.sobrenome}`
};

Pessoa.prototype.estouAqui = 'hahahaha';

Pessoa.prototype.toString = function() { // Sobrescreve `toString` no protótipo
    return this.nomeCompleto();
};

// Pessoa.prototype === pessoa1.__proto__ true

// Criando instâncias de Pessoa
const pessoa1 = new Pessoa('Estevão', 'Fernandes');
const pessoa2 = new Pessoa('Jordanna', 'Lima');
const data = new Date(); //<-- função construtora 

console.log(pessoa1);
console.log(pessoa2);


// Verifica o método nomeCompleto
console.log(pessoa2.nomeCompleto())
console.log(data);



