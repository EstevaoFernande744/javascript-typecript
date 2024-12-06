// IIFE - Immediately invoked function expression (Funções auto invocadas)

(function(idade, peso, altura){ // IIFE Função protejida por parenteses // função auto invocada! 

    const sobrenome = 'Fernandes'
    function criarNome(nome){ // criar o nome
        return nome + '' + sobrenome; // retornar nome + espaço + sobrenome
    }

    function falaNome(){ // Entrego o nome 
        console.log(criarNome('Estevão'));
    }

    falaNome(); // diz os 3 dados
    console.log(idade, peso, altura); // parametros da função que vão ser exibidos 

})(26, 105, 1.66) // vou estar dando os elementos da função idade, peso e altura