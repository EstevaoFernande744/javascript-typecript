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
        },

         // Liga cada botão ao respectivo botão do teclado
         keyBindings() {
            document.addEventListener('keydown', (e) => {
                // Apenas insere os caracteres válidos
                if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
                    this.btnParaDisplay(e.key);
                }

                if (e.key === 'Backspace') {
                    this.delDisplay();
                }

                if (e.key === 'Delete') {
                    this.clearDisplay();
                }

                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            });
        }

    } // esse objeto vai ter acesso a tudo aqui de dentro
}

const calculadora = criaCalculadora();
calculadora.inicia();