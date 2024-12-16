class ValidaFormulario {
    constructor() {
        this.formulario = document.getElementById('form');
        // pegando os elementos do formulario;
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
        const senhasValidas = this.senhasSaoValidas();

        if(camposSaoValidos && senhasValidas) {
            alert('Formulário enviado.');
            this.formulario.submit();
          }
    };

    senhasSaoValidas() {
        let valid = true;
    
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.rsenha');
    
        if(senha.value !== repetirSenha.value) {
          valid = false;
          this.creatError(senha, 'Campos senha e repetir senha precisar ser iguais.');
          this.creatError(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
        }
    
        if(senha.value.length < 6 || senha.value.length > 12) {
          valid = false;
          this.creatError(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }
    
        return valid;
      }

    camposSaoValidos() {
        let valid = true;


        // Remove todas as mensagens de erro anteriores
        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
           
        // Valida cada campo
        for(let campo of this.formulario.querySelectorAll('.validar')){
            // const label = this.formulario.querySelector(`label[for="${campo.id}"]`); 
            const label = campo.previousElementSibling.innerText;
            
            //const labelText = label ? label.innerHTML: 'Este campo';
            if(!campo.value) {
                this.creatError(campo, `Campo "${label}" não pode estar em branco!`);  // criar mensagem de erro; 

                /*
                Aqui, ele busca o <label> que tem o atributo for correspondente ao id do campo. Isso garante que ele encontrará o <label> correto, mesmo que não seja um irmão direto.
                */
                valid = false;
            }

            if (campo.classList.contains('cpf')){
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')){
                if (!this.validaUsuario(campo)) valid = false;
            }

        }

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
    
        if(usuario.length < 3 || usuario.length > 12) {
          this.creatError(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
          valid = false;
        }
    
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
          this.creatError(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
          valid = false;
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

