class Pessoa {
    constructor (nome, sobrenome) { // metodo  
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        return `${this.nome} esta falando`
    }

    comer() {
        return `${this.nome} esta comendo`
    }

    beber() {
        return`${this.nome} esta bebendo`
    }
}

const p1 = new Pessoa('Estevão', 'Fernandes');
const p2 = new Pessoa('Jordanna', 'Lima');
const p3 = new Pessoa('Lua', 'Fernandes');
console.log(p1)