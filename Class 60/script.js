// Factory functions / Constructor functions / Classes (facilitar)


function criaPessoa(nome, sobrenome) {  // função fabrica que cria objetos
    return {
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`           
        },
    };
}

const p1 = criaPessoa('Estevão', 'Fernandes')

console.log(p1.nomeCompleto)


function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // para travar o object
}



// a palavra new cria um objeto vazio {}, <- this atrela 
const p2 = new Pessoa('Estevão', 'Fernandes');
const p3 = new Pessoa('Jordanna', 'Lima')

console.log(p2, p3) // fala o construtor e o objeto