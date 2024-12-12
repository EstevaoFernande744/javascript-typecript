const _velocidade = Symbol('velocidade'); // protege quanto ao acesso desse elemento fora do objeto
class Carro {
    constructor (nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) { // condições para que se possa variar essa nossa velocidade condicional;
        console.log('SETTER')
        if(velocidade !== 'Number') return;
        if(velocidade >= 100 || velocidade <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() { // quando tentarem acessar velocidade, vão acessar nosso this[_velocidade];
        console.log('GETTER')
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 100) return;
        this[_velocidade]--;
    }
}


const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++){
    c1.acelerar()
}


const velocidade = 10000; // constante que vai ser ignorada;
c1.velocidade = 80
console.log(c1.velocidade)
console.log(c1)

