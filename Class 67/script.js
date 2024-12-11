// Polimorfismo

// Superclass - cria a conta
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};


// metodos

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
         
        return
    };

    this.saldo -= valor; // dinheiro sendo retirado
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor; // somar o valor a ser depositado no saldo 
    this.verSaldo(); // assim que for sacado a gente ve o saldo 
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag.: ${this.agencia}`)
    console.log(`Conta: ${this.conta}`)
    console.log(`Saldo: R$${this.saldo.toFixed(2)}`)
};

const conta1 = new Conta(11, 223344, 1000);


// conta1.sacar(1200)
////////////////////////////////////////////////////////////////////////////////////////


function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype) // para linkar os prototypes da CC aos da conta
CC.prototype.consturctor = CC; // chamando CC do construtor 

CC.prototype.sacar = function(valor) { // reescrevendo o metodo sacar na conta filha
    if (valor > (this.saldo + this.limite)) {  // tem um limite a mais para saques
        console.log(`Saldo insuficiente: ${this.saldo}`)
         
        return
    };

    this.saldo -= valor; // dinheiro sendo retirado
    this.verSaldo();
};


const cc = new CC(11, 223344, 1000, 250);

//////////////////////////////////////////////////////////////////////////////
// cc.sacar(1200)

function Poupança (agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

Poupança.prototype = Object.create(Conta.prototype) // para linkar os prototypes da Poupança aos da conta
Poupança.prototype.consturctor = Poupança; 

const poupança = new Poupança(11, 223344, 1000);



poupança.sacar(900)

//////////////////////////////////////////////////////////////////////////////