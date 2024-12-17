class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.form'); // Seleciona o formulário
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', (even) => {
            this.handleSubmit(even); // Captura o envio do formulário
        });
    }

    handleSubmit(even) {
        even.preventDefault();
        const camposValidos = this.checaCampos();
        const senhasValidas = this.senhasValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado com sucesso.');
            this.formulario.submit();
        }
    }

    senhasValidas() {
        let valido = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.rsenha');

        if (senha.value !== repetirSenha.value) {
            valido = false;
            this.criaErro(senha, 'Os campos "senha" e "repetir senha" precisam ser iguais.');
            this.criaErro(repetirSenha, 'Os campos "senha" e "repetir senha" precisam ser iguais.');
        }

        if (senha.value.length < 6 || senha.value.length >= 12) {
            valido = false;
            this.criaErro(senha, 'A senha precisa ter entre 6 e 12 caracteres.');
        }

        return valido;
    }

    checaCampos() {
        let valido = true;

        // Remove mensagens de erro existentes
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        // IDs dos campos para validação
        const campos = ["nome", "sobrenome", "cpf", "usuario", "senha", "rsenha"];
        const formData = {};

        campos.forEach((id) => {
            const campo = this.formulario.querySelector(`#${id}`);
            const label = document.querySelector(`label[for="${id}"]`)?.textContent.trim();

            if (!campo.value) {
                this.criaErro(campo, `O campo "${label}" não pode estar em branco.`);
                valido = false;
            }

            const value = campo.value || "vazio";
            formData[id] = `${label}: ${value}`;

            if (campo.classList.contains('cpf') && !this.validaCPF(campo)) {
                valido = false;
            }

            if (campo.classList.contains('usuario') && !this.validaUsuario(campo)) {
                valido = false;
            }
        });

        console.log("Dados do formulário:", formData); // Exibe os dados no console
        return valido;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valido = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'O usuário precisa ter entre 3 e 12 caracteres.');
            valido = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'O nome de usuário deve conter apenas letras e/ou números.');
            valido = false;
        }

        return valido;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text'); // Corrigido o nome da classe
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();
