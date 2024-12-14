class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.form'); // pegando os elementos do formulario;
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => { 
            this.handleSubmit(e); // ação de enviar com o botão;
        });
    }

    handleSubmit(e) {   
        e.preventDefault();
        const camposSaoValidos = this.camposSaoValidos();
    };

    camposSaoValidos() {
        let valid = true;


        // Remove todas as mensagens de erro anteriores
        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
           
        // Valida cada campo
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = this.formulario.querySelector(`label[for="${campo.id}"]`); 
            const labelText = label ? label.innerHTML: 'Este campo';

            if(!campo.value) {
                this.creatError(campo, `*Campo "${labelText}" não pode estar em branco!`);  // criar mensagem de erro; 

                /*
                Aqui, ele busca o <label> que tem o atributo for correspondente ao id do campo. Isso garante que ele encontrará o <label> correto, mesmo que não seja um irmão direto.
                */
                valid = false;
            }

            if (campo.classList.contains('cpf')){
                if (!this.validaCPF(campo.value)) valid = false;
            }

        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.creatError(campo, 'CPF invalido.');
            return false;
        }

        return true;
    }

    creatError(campo, msg) { // erro gerado
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();