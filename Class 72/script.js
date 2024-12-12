class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já esta ligado`)
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já esta desligado`)
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { // vai herdar de dispositivoE com a palavra extends;
    constructor(nome, cor, modelo){
        super(nome) // chama os parametros da super class 
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor (nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Você mudou o metodo ligar!')
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '16pro')
s1.ligar()  
s1.ligar()
s1.desligar()
s1.desligar()
console.log(s1)



const t1 = new Tablet('Sansumg', true);
t1.ligar()
// console.log(t1)