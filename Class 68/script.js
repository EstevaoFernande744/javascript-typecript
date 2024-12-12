function criaPessoa (nome, sobrenome) {
    const pessoaPrototype = { // criamos um prototype comum para todas as pessoas
        falar(){
            return `${this.nome} está falando.` // não usar console.log, usar return e depois puxar o console para mostrar
        },
        comer(){
            return `${this.nome} está comendo.`
        },
        beber(){
            return `${this.nome} está bebendo.`
        },  
    }
    return Object.create(pessoaPrototype, { // cria um objeto vazio e linka o prototype no objeto criado
        nome: {value: nome}, /* mas ai criamos as propriedades no propriety description map e podemos dizer todas as pripriedades dessas chaves se quiser */
        sobrenome: {value: sobrenome},
    })
}


const p1 = criaPessoa('Estevão', 'Fernandes');
const p2 = criaPessoa('Jordanna', 'Lima')
console.log(p1.comer())
console.log(p2.beber())

function criaAnimal (nome, especie) { /* dessa forma a cada pessoa que eu criar esses metodos seram implementados e não vai ser uma forma muito ideal de se trabalhar*/

    return { //metodo de delegação 
    nome,
    especie,
    comFome() { 
        return `${this.nome} esta com fome!`
    },
    querBrincar() {
        return `${this.nome} quer brincar!`
    },
    estaComSono() {
        return `${this.nome} esta com sono!`
    }
    }
}

// const animalPrototype = {...comFome, ...querBrincar, ...estaComSono}; ou Object.assign({} comFome, querBrincar, estaComSono)

const animal1 = criaAnimal('Lua', 'Gato(a)')

console.log(animal1)