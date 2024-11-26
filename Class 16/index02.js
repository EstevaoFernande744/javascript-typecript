const pessoa1 = { // objeto
    nome: 'Estevão',
    sobrenome: 'Fernandes',
    idade: 26, 


    fala(){ // metodo (função dentro de um objeto)
        console.log(`A minha idade atual é ${this.idade} anos.`)
    },

    incrementaIdade() {
        this.idade++
    }
}


pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()