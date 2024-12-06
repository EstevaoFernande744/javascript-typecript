function Calculadora() { // função construtora
    // Seleciona o display
    this.display = document.querySelector('.display');

    this.inicia = () => this.capturaCliques();{
    this.capturaEnter(); }
                                                                                                                        
    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.key === 'Enter') return
            this.realizaConta();
        })
    }
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target; // elemento (botão)
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    }
    
    // Cria um metodo

    this.addNumDisplay = (el) => this.display.value += el.innerText;
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => { 
    try{
        const conta = eval(this.display.value);

        if (conta === undefined || conta === null)// se isso passar como codigo do JS;
        alert('Conta Inválida');
        this.display.value = conta;
        return;
        
    } catch (event) {
        alert('Conta Inválida');
        return;
    }}
}

const calculadora = new Calculadora(); // cria um novo objeto calculadora
calculadora.inicia();




/*
function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        
        inicia(){
            this.clickBotoes();
            this.pressEnter();
            this.keyBindings(); // Liga as teclas do teclado aos botões
        },

        pressEnter() {
            this.display.addEventListener('keyup', (e) =>{
                if(e.key === 'Enter'){
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        delDisplay(){
            this.display.value = this.display.value.slice(0, -1); // para apagar o um valor, é o tamanho do elemento -1
        },

        realizaConta(){
           let conta = this.display.value;

           try {
            conta = eval(conta); // função que pega comando em JavaScript de uma string e transform em codigo 
            if(conta === undefined || conta === null) { // caso não seja um valor valido
                alert('Conta Inválida') 
                return;
                }
                this.display.value = String(conta); // pega o valor do display e coloca na conta
            } catch(e){
                alert('Conta Inválida') 
           }
        },

       
        
        clickBotoes(){
            // this -> calculadora
            document.addEventListener('click', function(event){ // podiamos substituir por uma arrow function tbm (event) =>
                const el = event.target;

                if(el.classList.contains('btn-num')){
                    // this -> document
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')) { // se o botão clear for clicado 
                    this.clearDisplay(); // chama a função clearDisplay
                }

                if(el.classList.contains('btn-del')) {
                    this.delDisplay();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this)) // ao inves de usar esse this document, usa this calculadora
        },

        btnParaDisplay(valor){
            this.display.value += valor;
            /* pegamos o valor do do botão e concatenando  */
        

        
         // Liga cada botão ao respectivo botão do teclado
        /* keyBindings() {
            document.addEventListener('keydown', (e) => {
                // Apenas insere os caracteres válidos */