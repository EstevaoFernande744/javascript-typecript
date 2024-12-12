// Métodos de instância e estáticos

class ControleRemoto { // metodo estático, metodo apenas referente a classe
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() { // metodo de instância
        this.volume += 2;

    }

    diminuirVolume() { // metodo de instância
        this.volume -= 2;
        
    }


    static trocarPilha(){ // metodo estático
        console.log('ok, vou trocar.')
    }

}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
// controle1.trocarPilha() vai dar erro
ControleRemoto.trocarPilha(); // utilizamos a classe para chamar esse metodo
console.log(controle1)
