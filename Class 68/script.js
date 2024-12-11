function criaPessoa (nome, sobrenome) {
    const pessoaPrototpe = {
        falar(){
            console.log(`${this.nome} está falando.`)
        },
        comer(){
            console.log(`${this.nome} está comendo.`)
        },
        beber(){
            console.log(`${this.nome} está bebendo.`)
        },
    }
    return Object.create(pessoaPrototpe, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    })
}


const p1 = criaPessoa('Estevão', 'Fernandes');
const p2 = criaPessoa('Jordanna', 'Lima')
console.log(p1.comer())
console.log(p2.beber())

