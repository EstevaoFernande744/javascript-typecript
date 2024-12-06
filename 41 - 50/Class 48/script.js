/* 
Função Construtora:
Criar Objects
CC - 1° Letra maiuscula (ex: Pessoa (new)) 
*/

/*
Função Fabrica:
Cria Objects
*/

function Pessoa(nome, sobrenome) {
    /*   ----  Atributos ou metodos Privados
    const ID = 123456;

    const metodoInterno = function() { // metodoInterno = () => {}

    } 
    
    */

    // Atributos ou métodos públicos
    // `this` refere-se à instância criada por `new`
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método')
    }
}

const p1 = new Pessoa('Estevão', 'Fernandes') // A palavra new cria um objeto vazio, faz apontar para esse objeto vazio e retorna esse objeto para essa variavel 
const p2 = new Pessoa('Jordanna', 'Lima')

console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);

