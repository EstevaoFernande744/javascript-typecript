// Vetor global para armazenar cadastros
const cadastros = [];

// Função para inicializar o evento de cadastro
function inicializarCadastro() {
    const form = document.querySelector('#fundo'); // Seleciona o formulário pelo ID
    
    // Adiciona o evento 'submit' ao formulário
    form.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Previne o envio do formulário

        // Captura os dados do formulário
        const dados = capturarDadosDoFormulario(evento.target);

        // Adiciona os dados ao vetor de cadastros
        cadastros.push(dados);

        // Atualiza os cadastros exibidos no HTML
        atualizarResultados();

        // Limpa o formulário
        evento.target.reset();
    });
}

// Função para capturar os dados do formulário
function capturarDadosDoFormulario(form) {
    return {
        nome: form.querySelector('#ilogin').value,
        tipoSanguineo: form.querySelector('#itiposang').value,
        email: form.querySelector('#iemail').value,
        funcao: form.querySelector('#ifunçao').value,
        senha: form.querySelector('#isenha').value,
    };
}

// Função para atualizar os resultados exibidos no HTML
function atualizarResultados() {
    const resultado = document.querySelector('#resultado'); // Seleciona o elemento para exibir os resultados
    resultado.innerHTML = ''; // Limpa os resultados antigos

    // Cria um HTML para exibir cada cadastro
    cadastros.forEach((cadastro, index) => {
        resultado.innerHTML += `
            <p><strong>Cadastro ${index + 1}:</strong></p>
            <ul>
                <li><strong>Nome:</strong> ${cadastro.nome}</li>
                <li><strong>Tipo Sanguíneo:</strong> ${cadastro.tipoSanguineo}</li>
                <li><strong>Email:</strong> ${cadastro.email}</li>
                <li><strong>Função:</strong> ${cadastro.funcao}</li>
            </ul>
            <hr>
        `;
    });
}

// Chama a função para inicializar
inicializarCadastro();
