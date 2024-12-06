function Calculadora() { // função construtora
    // Seleciona o display
    this.display = document.querySelector('.display');

    this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
    this.keyBindings(); // Liga as teclas do teclado aos botões
 };
    
     // Liga o Enter no campo do display
     this.capturaEnter = () => {
        this.display.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.realizaConta();
            }
        });
    };

    // Liga cada botão ao respectivo botão do teclado
    this.keyBindings = () => {
        document.addEventListener('keydown', (e) => {
            const teclasValidas = "0123456789+-*/.";
            if (teclasValidas.includes(e.key)) {
                this.addNumDisplayKey(e.key);
            }

            if (e.key === 'Backspace') {
                e.preventDefault();
                this.del();
            }

            if (e.key === 'Delete') {
                e.preventDefault();
                this.clear();
            }

            if (e.key === 'Enter') {
                e.preventDefault();
                this.realizaConta();
            }
        });
    };

    // Liga eventos de cliques  
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target; // elemento (botão)
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    }
    
    // Cria metodos
    // Adiciona o número pelo teclado no display
    this.addNumDisplayKey = (valor) => {
    this.display.value += valor;
    };

    this.addNumDisplay = (el) => {this.display.value += el.innerText;}

    this.clear = () => {this.display.value = ''}; // Limpa o display

    this.del = () => { this.display.value = this.display.value.slice(0, -1)}; // Apaga o último caractere do display

    this.realizaConta = () => { // Realiza a conta
    try{
        const conta = eval(this.display.value);
        if (!conta && conta !== 0) { // Caso a conta seja inválida
        alert('Conta Inválida');
        this.display.value = conta;
        return;
    }
        this.display.value = String(conta);
        
    } catch (event) {
        alert('Conta Inválida');
        return
    }}
}

const calculadora = new Calculadora(); // cria um novo objeto calculadora
calculadora.inicia();